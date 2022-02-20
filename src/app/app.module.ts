import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filterpipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule }  from '@angular/material/button'
import {MatInputModule} from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 
import {  MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';


const material = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule ,
  MatCardModule,
  MatButtonToggleModule,
  MatSliderModule,
  MatToolbarModule,
  MatCheckboxModule,
];

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    FilterPipe,
    PostComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    material,
  ],
  exports: [
    material,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
