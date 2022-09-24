import { Component, OnInit } from '@angular/core';
import { IAppointment } from 'src/app/model/appointment.interface';
import { IDoctor } from 'src/app/model/doctor.interface';
import { AppointmentService } from 'src/app/services/appointments.service';
import { CredentialsService } from 'src/app/services/credetials.service';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  doctorData:IDoctor = {
    id: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    location: '',
    degree: '',
    fees: 0,
    experience: 0,
    inTime: '',
    outTime: '',
    emailId: '',
    password: ''
  }

  aptList:IAppointment[] = [];

  constructor(private _cred:CredentialsService, private _doctorList:DoctorsService, private _apt:AppointmentService) { }

  ngOnInit(): void {
    this._cred.currentPage$.next(true);

    this._cred.loggedIn$.subscribe((data) => {
      this.doctorData = this._doctorList.Doctors.find(x => x.firstName ===  data)!;
      console.log(this.doctorData);
  })

  this.aptList = this._apt.Appointments;

}

}
