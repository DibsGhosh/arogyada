import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDegree } from 'src/app/model/degree.interface';
import { CredentialsService } from 'src/app/services/credetials.service';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css']
})


export class DoctorSignupComponent implements OnInit {

  doctorDetails!:FormGroup;
  
  degrees:IDegree[] = [
    {degree: "MBBS", full: "Bachelor of Medicine, Bachelor of Surgery"},
    {degree: "BDS", full: "Bachelor of Dental Surgery"},
    {degree: "BAMS", full: "Bachelor of Ayurvedic Medicine and Surgery"},
    {degree: "BUMS", full: "Bachelor of Unani Medicine and Surgery"},
    {degree: "BHMS", full: "Bachelor of Homeopathy Medicine and Surgery"},
    {degree: "BYNS", full: "Bachelor of Yoga and Naturopathy Sciences"},
    {degree: "B.V.Sc & AH", full: "Bachelor of Veterinary Sciences and Animal Husbandry"}
  ]

  location:string[] = [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Goa',
    'Gujurat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerela',
    'Ladakh',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'NCT of Delhi',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal'
];
  constructor(private _fb:FormBuilder, private _cred:CredentialsService) { }

  ngOnInit(): void {

    this._cred.currentPage$.next(false);

    this.doctorDetails = this._fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      location: ['', Validators.required],
      degree: [''],
      fees: ['', Validators.required],
      experience: ['', Validators.required],
      inTime: ['', Validators.required],
      outTime: ['', Validators.required],
      emailId: ['', Validators.required],
      password:['', Validators.required],
      rePassword: ['', Validators.required]
      
    })
  }

  save(){
    console.log(this.doctorDetails.value.password);
    console.log(this.doctorDetails.value.rePassword);
    console.log(this.doctorDetails.value.password !== this.doctorDetails.value.rePassword);
    
    console.log(this.doctorDetails.value);
    this._cred.currentPage$.next(true);
    
    
  }

}
