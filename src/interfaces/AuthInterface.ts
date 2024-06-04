import { ReactNode } from "react";

export interface ProtectedRoutesProps {
    isAuthenticated: boolean;
    children?: ReactNode;
}

export interface UserAuthData{
    // username:string;
    password:string;
    firstname:string;
    lastname:string;
    phone:number;
    address:string;
    email:string;
}