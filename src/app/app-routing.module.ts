import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAppointmentComponent } from './doctor/view-appointment/view-appointment.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ViewDoctorComponent } from './patient/view-doctor/view-doctor.component';
import { DoctorSignupComponent } from './user-credentials/doctor-signup/doctor-signup.component';
import { LoginComponent } from './user-credentials/login/login.component';
import { PatientSignupComponent } from './user-credentials/patient-signup/patient-signup.component';

const routes: Routes = [
  {path: "home", component:LandingPageComponent},
  {path: "login", component:LoginComponent},
  {path: "signup/doctor", component:DoctorSignupComponent},
  {path: "signup/patient", component:PatientSignupComponent},
  {path: "patient", component:ViewDoctorComponent},
  {path: "doctor", component:ViewAppointmentComponent},
  {path: "", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
