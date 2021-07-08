import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import { CoachProfileComponent } from './coachProfile.component';
import { CoachProfileRoutingModule } from './coachProfile-routing.module';

@NgModule({
  declarations: [CoachProfileComponent],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, CoachProfileRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class CoachProfileModule {}
