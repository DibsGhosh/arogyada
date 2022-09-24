import { IDegree } from "./degree.interface";

export interface IDoctor{
    id:number;
    firstName:string;
    middleName:string;
    lastName:string;
    location:string;
    degree: string;
    fees:number;
    experience:number;
    inTime:string;
    outTime:string;
    emailId: string;
    password:string;
}