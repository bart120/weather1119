import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  cities: Array<string> = null;

  constructor(private router: Router, private nativeStorage: NativeStorage) { }

  ngOnInit() {
    this.nativeStorage.getItem('CITIES').then(
      data => this.cities = data
    ).catch(
      err => console.log('pas de villes')
    );
  }

  onClickAdd(): void {
    this.router.navigate(['/pages/cities/add']);
  }

  onDragItem(ev: any): void {
    // console.log('ev', ev);
  }

  onTrashClick(city: string): void {
    this.nativeStorage.getItem('CITIES').then(
      data => {
        data.pop(city);
        this.nativeStorage.setItem('CITIES', data).then(
          () => this.cities = data
        );
      }
    ).catch(
      err => console.log('pas de villes')
    );
  }

  onClickItem(city: string): any {
    console.log(city);
    this.router.navigate(['/pages/home', city]);
  }

}
