import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private apiUrl = 'https://localhost:7240/api/personas'; // URL del API

  constructor(private http: HttpClient) {}

  // Método para obtener personas
  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl);
  }

  // Método para obtener una persona por su id
  getPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiUrl}/${id}`);
  }

  // Método para crear una nueva persona
  createPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiUrl, persona);
  }

  // Método para actualizar una persona
  updatePersona(id: number, persona: Persona): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, persona);
  }

  // Método para eliminar una persona
  deletePersona(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
