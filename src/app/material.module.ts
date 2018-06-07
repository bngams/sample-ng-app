import { NgModule } from '@angular/core';

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
