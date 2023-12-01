import { Injectable } from '@angular/core';

// HttpCliente: nos permite hacer get, put, post, delete; nos permite comunicarme con el api
import { HttpClient } from '@angular/common/http';
// Observables: 
import { arrayCharacters } from '../../models/rick.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RickandmortyService {

// private: es solo accesible dentro de la clase, en este caso dentro de la clase ickandmortyService
  constructor(private http: HttpClient) { }

  obtenerPersonajes(): Observable<arrayCharacters>{

    return this.http.get<arrayCharacters>('https://rickandmortyapi.com/api/characther')
  }

}

// Observable: es una función la cual observará lo que llega, se podría decir que es una promesa (solo metodos http)