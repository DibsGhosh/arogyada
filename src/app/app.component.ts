import { Component } from '@angular/core';
import { CredentialsService } from './services/credetials.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arogyada';
  page:boolean = true;

  constructor (private _cred:CredentialsService) {}

  ngOnInit(){
    this._cred.currentPage$.subscribe((data) => {
      this.page = data;
    })
  }
}
