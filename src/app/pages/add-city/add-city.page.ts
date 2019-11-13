import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.page.html',
  styleUrls: ['./add-city.page.scss'],
})
export class AddCityPage implements OnInit {

  addCityForm: FormGroup = new FormGroup(
    { cityName: new FormControl('', [Validators.required]) }
  );

  constructor(private nativeStorage: NativeStorage, public toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
  }

  onSaveClick(): void {
    const name = this.addCityForm.value.cityName;
    this.nativeStorage.getItem('CITIES').then(
      data => {
        const tab = data;
        tab.push(name);
        this.nativeStorage.setItem('CITIES', tab).then(
          async () => {

            const toast = await this.toastController.create({
              message: `La ville ${name} a été ajoutée.`,
              duration: 2000
            });
            toast.present();
            console.log('ok');
            this.router.navigate(['/pages/cities']);
          }
        ).catch(err => console.log('set', err));

      }
    ).catch(err => {
      if (err.code == 2) {

        const tab = new Array<string>();
        tab.push(name);
        this.nativeStorage.setItem('CITIES', tab).then(
          async () => {

            const toast = await this.toastController.create({
              message: `La ville ${name} a été ajoutée.`,
              duration: 2000
            });
            toast.present();
            console.log('ok');
            this.router.navigate(['/pages/cities']);
          }
        ).catch(err => console.log('set', err));
      }
    });

  }

}
