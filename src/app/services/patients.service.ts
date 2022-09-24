import {Injectable} from '@angular/core';
import { IPatient } from '../model/patient.interface';

@Injectable()

export class PatientsService{

    Patients:IPatient[] = [
        {id: 1,firstName:"Ritesh", middleName: "", lastName: "Malik", location:"Mumbai", mobileNumber:8917316258, age:32, emailId:"ritesh.malik@arogyada.com", password:"patient@123"},
{id: 2,firstName:"Priya", middleName: "", lastName: "Singh", location:"Bengluru", mobileNumber:6127930149, age:43, emailId:"priya.singh@arogyada.com", password:"patient@123"},
{id: 3,firstName:"Josh", middleName: "", lastName: "Reed", location:"New York", mobileNumber:5074696750, age:38, emailId:"josh.reed@arogyada.com", password:"patient@123"},
{id: 4,firstName:"Saniya", middleName: "", lastName: "Khanna", location:"Delhi", mobileNumber:6127941639, age:53, emailId:"saniya.khanna@arogyada.com", password:"patient@123"},
{id: 5,firstName:"Ankush", middleName: "", lastName: "Sachdeva", location:"Mumbai", mobileNumber:6121464335, age:28, emailId:"ankush.sachdeva@arogyada.com", password:"patient@123"},
{id: 6,firstName:"Ethan", middleName: "", lastName: "Payne", location:"London", mobileNumber:7700144636, age:55, emailId:"ethan.payne@arogyada.com", password:"patient@123"}
    ]
}