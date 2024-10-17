import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environments } from '../../../environments/environment';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Integracion } from '../interfaces/integracion.interface';
import { IntegracionTabla } from '../interfaces/tabla.interface';

@Injectable({providedIn: 'root'})
export class IntegracionesService {

  private baseUrl:string =environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getIntegraciones():Observable<Integracion[]> {
    return this.httpClient.get<Integracion[]>(`${this.baseUrl}/api/SideBar`);

  }


  getIntegracionTablaById(id: string):Observable<IntegracionTabla | undefined> {
    return this.httpClient.get<IntegracionTabla>(`${this.baseUrl}/api/Tabla/${id}`)
       .pipe(
        catchError(error=>of (undefined))

       )

  }

/*

  getSuggestion(query: string):Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`)
  }
*/




}
