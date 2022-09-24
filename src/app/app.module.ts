import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './footer/footer.component';
import { UserCredentialsModule } from './user-credentials/user-credentials.module';
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';
import { DoctorsService } from './services/doctors.service';
import { PatientsService } from './services/patients.service';
import { AppointmentService } from './services/appointments.service';
import { CredentialsService } from './services/credetials.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UserCredentialsModule,
    PatientModule,
    DoctorModule
  ],
  providers: [DoctorsService, PatientsService, AppointmentService, CredentialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
