import { Injectable } from "@angular/core";
import { IDoctor } from "../model/doctor.interface";

@Injectable()

export class DoctorsService{

    Doctors:IDoctor[] = [
        {id: 1,firstName:"Jack", middleName: "", lastName: "Sharp", location:"New York", degree:"MBBS", fees:900, experience:12, inTime:"08:30", outTime:"16:30", emailId:"jack.sharp@arogyada.com", password:"doctor@123"},
{id: 2,firstName:"Harry", middleName: "", lastName: "Lewis", location:"London", degree:"MBBS", fees:1200, experience:11, inTime:"10:15", outTime:"18:00", emailId:"harry.lewis@arogyada.com", password:"doctor@123"},
{id: 3,firstName:"Richa", middleName: "", lastName: "Sharma", location:"Bengluru", degree:"BDS", fees:700, experience:7, inTime:"09:30", outTime:"19:15", emailId:"richa.sharma@arogyada.com", password:"doctor@123"},
{id: 4,firstName:"Sanjay", middleName: "", lastName: "Singh", location:"Delhi", degree:"MBBS", fees:1000, experience:18, inTime:"08:45", outTime:"16:45", emailId:"sanjay.singh@arogyada.com", password:"doctor@123"},
{id: 5,firstName:"Rohit", middleName: "", lastName: "Shetty", location:"Mumbai", degree:"MBBS", fees:800, experience:10, inTime:"11:00", outTime:"18:30", emailId:"rohit.shetty@arogyada.com", password:"doctor@123"}
    ];

    
}