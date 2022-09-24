import { Component, OnInit } from '@angular/core';
import { IDoctor } from 'src/app/model/doctor.interface';
import { IPatient } from 'src/app/model/patient.interface';
import { CredentialsService } from 'src/app/services/credetials.service';
import { DoctorsService } from 'src/app/services/doctors.service';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {

  temp:string = "test";
  patientData: IPatient = {
    id: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    location: '',
    mobileNumber: 0,
    age: 0,
    emailId: '',
    password: ''
  }

  doctorList:IDoctor[] = [
  ];
  constructor(private _cred:CredentialsService, private _patientList:PatientsService, private _doctorList:DoctorsService) { }

  ngOnInit(): void {

    this._cred.loggedIn$.subscribe((data) => {
      this.patientData = this._patientList.Patients.find(x => x.firstName ===  data)!;
      console.log(this.patientData);
      
  })

  this.doctorList = this._doctorList.Doctors;

}
}
