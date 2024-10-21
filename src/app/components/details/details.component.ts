import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousinglocationService } from '../../services/housinglocation.service';
import { Housinglocation } from '../../models/housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousinglocationService);
  housingLocation: Housinglocation | undefined;

  constructor(){
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);

    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);

  }
}
