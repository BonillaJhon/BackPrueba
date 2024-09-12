import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'https://localhost:7240/api/Usuarios'; // Cambia esto a la URL de tu API

  constructor(private http: HttpClient) {}

  // Método para crear un nuevo usuario
  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  // Método para obtener la lista de usuarios
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
  

  // Método para eliminar un usuario por su ID
  deleteUsuario(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Método para obtener un usuario por su ID
  getUsuarioById(id: number): Observable<Usuario> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Usuario>(url);
  }
}
