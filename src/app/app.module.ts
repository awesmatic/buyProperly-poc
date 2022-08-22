import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PropertylistComponent } from './propertylist/propertylist.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { PropertylistEffects } from './propertylist/state/propertylist.effects';
import { LoginEffects } from './login/store/login.effects';
import { PropertyDetailsEffects } from './property-details/store/property-details.effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PropertylistComponent,
    PropertyDetailsComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      PropertylistEffects,
      LoginEffects,
      PropertyDetailsEffects,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
