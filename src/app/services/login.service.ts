import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface User {
    "id": string,
    "username": string,
    "email": string,
    "firstName": string,
    "lastName": string,
    "gender": string,
    "image": string,
    "token": string,
}

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    constructor(private http: HttpClient) { }

    // Definimos nuestra función 
    login(username: string, password: string): Observable<User> {

        // En que lenguaje nos estamos comunicando con el api
        const headers = new HttpHeaders({ 'Content-type': 'application/json' })       
        return this.http.post<User>(

            'https://dummyjson.com/docs/auth/login', JSON.stringify({ username, password }),
        )

    }
}