import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../services/credetials.service';
import { DoctorsService } from '../services/doctors.service';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  page: string = '';
  userName: string = '';
  constructor(private _cred:CredentialsService, private _patientList:PatientsService, private _doctorList:DoctorsService) { }

  ngOnInit(): void {
    // this._cred.currentPage$.subscribe((data) =>{
    //   this.page = data;
    //   if(this.page === 'patient'){
    //     this._cred.loggedIn$.subscribe((data) => {
    //      this.userName = data + " " + this._patientList.Patients.find(x => x.firstName ===  data)?.lastName!;
    //     })
    //   }
    //   else if(this.page === 'doctor'){
    //     this._cred.loggedIn$.subscribe((data) => {
    //       this.userName = "Dr." + data + " " + this._doctorList.Doctors.find(x => x.firstName ===  data)?.lastName!;
    //      })
    //   }
    // })
  }

}
