import { Component, OnInit } from '@angular/core';
import { PropertyDataService } from '../services/property-data.service';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css'],
})
export class PropertylistComponent implements OnInit {
  properties: any;

  constructor(private propertyDetails: PropertyDataService) {
    propertyDetails.getPropertyDetails().subscribe((data) => {
      console.log(data);
      this.properties = data;
    });
  }

  ngOnInit(): void {}
}
