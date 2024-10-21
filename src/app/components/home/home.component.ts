import { Component, inject } from '@angular/core';
import { Housinglocation } from '../../models/housinglocation';
import { HousinglocationService } from '../../services/housinglocation.service';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [];
  housingService: HousinglocationService = inject(HousinglocationService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
