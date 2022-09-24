import { Injectable } from "@angular/core";
import { IAppointment } from "../model/appointment.interface";

@Injectable()

export class AppointmentService{

    Appointments:IAppointment[] = [
        {id: 1,doctorName:"Harry", patientName:"Ritesh", patientAge:32, symptoms:"cachexia", date:"10-03-2022", time:"14:10"},
        {id: 2,doctorName:"Rohit", patientName:"Saniya", patientAge:53, symptoms:"muscle weakness", date:"09-29-2022", time:"12:20"},
        {id: 3,doctorName:"Sanjay", patientName:"Ethan", patientAge:55, symptoms:"convulsions ", date:"10-09-2022", time:"16:50"},
        {id: 4,doctorName:"Richa", patientName:"Priya", patientAge:43, symptoms:"pyrexia", date:"09-10-2022", time:"10:00"}
    ]
}