import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArchieveComponent } from './archieve/archieve.component';
import { UnknownComponent } from './unknown/unknown.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArchieveComponent,
    UnknownComponent,
    
             
  ],
  imports: [
   BrowserModule, FormsModule,
   ReactiveFormsModule, HttpModule,
   RouterModule.forRoot([
    {path: 'archieve/:month/:date', component: ArchieveComponent},
     {path: '', component: HomeComponent},
     
     {path: '**', component: UnknownComponent}
   ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
