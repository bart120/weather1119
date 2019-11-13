import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.page.html',
  styleUrls: ['./add-city.page.scss'],
})
export class AddCityPage implements OnInit {

  addCityForm: FormGroup = new FormGroup(
    { cityName: new FormControl('', [Validators.required]) }
  );

  constructor() { }

  ngOnInit() {
  }

  onSaveClick(): void {
    const name = this.addCityForm.value.cityName;

  }

}
