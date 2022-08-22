import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertylistComponent } from './propertylist/propertylist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'property-list',
    component: PropertylistComponent,
    // children: [
    //   {
    //     path: ':id',
    //     component: PropertyDetailsComponent,
    //   },
    // ],
  },
  {
    path: 'property-detail',
    component: PropertyDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
