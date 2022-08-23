import { Component, OnInit } from '@angular/core';
import { PropertyDetailsService } from '../services/property-details.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { PropertyDetailsModel } from './propertyDetails.model';
import * as PropertyActions from './store/property-details.actions';
import * as fromProperty from './store/property-details.selectors';
import * as fromApp from './store/property-details.reducer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent implements OnInit {
  errorMessage = '';
  propertiesDetails: any;
  id: any;
  // propertiesDetails: Observable<PropertyDetailsModel[]> | undefined;

  constructor(
    private propertyDetails: PropertyDetailsService,
    private store: Store<fromApp.PropertiesDetailsState>,
    private route: ActivatedRoute
  ) {
    // propertyDetails.getPropertyDetails().subscribe((data) => {
    //   console.log(data);
    //   this.properties = data;
    // });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params['id']);

    console.log('properties');
    // this.store
    //   .pipe(select(fromProperty.getProperties))
    //   .subscribe((properties) => {
    //     this.propertiesDetails = properties;
    //     console.log('properties');
    //   });

    // this.propertiesDetails = this.store.pipe(
    //   select(fromProperty.getProperties)
    // );
    // console.log(this.propertiesDetails);

    // testing code
    // console.log('1');

    console.log(this.propertiesDetails);
    console.log('2');
    if (this.id) {
      this.getPropertyDetails();
    }
    console.log(this.id);
  }

  getPropertyDetails() {
    this.store.dispatch(
      new PropertyActions.LoadPropertiesDetails({ id: this.id })
    );
    this.store
      .select(fromProperty.getProperties)
      .subscribe((state) => (this.propertiesDetails = state));
    console.log(this.propertiesDetails);
  }
}
