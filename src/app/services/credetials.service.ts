import {Injectable} from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()

export class CredentialsService{

    loggedIn$ = new BehaviorSubject("");
    currentPage$ = new Subject<boolean>();

    
}
