import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// material
import { MaterialModule } from './material.module';
// utils module
import { UtilsModule } from './utils/utils.module';

// translation install
import { TranslateModule } from '@ngx-translate/core';
// translation conf
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// use Http request to load langages
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CityFormComponent } from './city-form/city-form.component';
import { CityCardsComponent } from './city-cards/city-cards.component';
import { CitiesService } from 'src/app/city-service/cities.service';

// translation conf
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    CityFormComponent,
    CityCardsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    UtilsModule,
    HttpClientModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: { // config loader
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [CitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
