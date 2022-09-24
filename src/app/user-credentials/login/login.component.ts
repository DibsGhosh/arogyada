import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialsService } from 'src/app/services/credetials.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login!:FormGroup;
  constructor(private _fb:FormBuilder, private _router:Router, private _cred:CredentialsService) { }

  ngOnInit(): void {

    this._cred.currentPage$.next(false);
    this.login = this._fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      accType: ['']
    })
  }

  route(){
    if(this.login.valid){
      if(this.login.value.accType === "patient"){
        this._cred.loggedIn$.next("Ritesh");
        this._cred.currentPage$.next(true);
        this._router.navigate(['/patient']);
      }
      else{
        this._cred.loggedIn$.next("Jack");
        this._cred.currentPage$.next(true);
        this._router.navigate(['/doctor']);
      }
    }
  }

}
