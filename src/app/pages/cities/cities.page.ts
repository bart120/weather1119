import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickAdd(): void {
    this.router.navigate(['/pages/cities/add']);
  }

}
