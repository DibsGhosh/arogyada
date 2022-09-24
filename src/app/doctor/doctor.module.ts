import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ViewAppointmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    ViewAppointmentComponent
  ]
})
export class DoctorModule { }
