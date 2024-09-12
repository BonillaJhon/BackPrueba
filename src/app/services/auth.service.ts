import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario'; // Modelo de Usuario

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private apiUrl = 'https://localhost:7240/api/usuarios'; // URL de tu API para usuarios

  constructor(private http: HttpClient) {}

  // Obtener la lista de usuarios desde la API
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  // Iniciar sesión y marcar al usuario como autenticado
  login(): void {
    this.isLoggedIn = true;
  }

  // Cerrar sesión y marcar al usuario como no autenticado
  logout(): void {
    this.isLoggedIn = false;
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
