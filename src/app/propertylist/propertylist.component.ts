import { Component, OnInit } from '@angular/core';
import { PropertyDataService } from '../services/property-data.service';
import { Store, select } from '@ngrx/store';
import * as PropertyActions from './state/propertylist.actions';
import * as fromProperty from './state/propertylist.selectors';
import { IProperty } from './property';
import { Observable } from 'rxjs';
import * as fromPropertyList from './state/propertylist.reducer';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css'],
})
export class PropertylistComponent implements OnInit {
  errorMessage = '';
  // propertiesList: IProperty[] = [];
  propertiesList: Observable<IProperty[]> | undefined;

  constructor(
    private propertyDetails: PropertyDataService,
    private store: Store
  ) {
    // propertyDetails.getPropertyDetails().subscribe((data) => {
    //   console.log(data);
    //   this.properties = data;
    // });
    // this.propertiesList = this.store.select(fromProperty.getProperties);
    // console.log(this.store);
    // testing code
    // this.store.dispatch(new PropertyActions.LoadProperties());
    // this.propertiesList = this.store.pipe(select(fromProperty.getProperties));
    // console.log(this.propertiesList);
  }
  ngOnInit(): void {
    // this.store.dispatch(new PropertyActions.LoadProperties());

    this.store.dispatch(new PropertyActions.LoadProperties());
    this.propertiesList = this.store.pipe(select(fromProperty.getProperties));
    console.log(this.propertiesList);

    // this.store
    //   .pipe(select(fromProperty.getProperties))
    //   .subscribe((properties) => {
    //     this.propertiesList = properties;
    //     console.log(properties);
    //   });
  }
}
