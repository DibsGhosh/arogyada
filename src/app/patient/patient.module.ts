import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ViewDoctorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    ViewDoctorComponent
  ]
})
export class PatientModule { }
