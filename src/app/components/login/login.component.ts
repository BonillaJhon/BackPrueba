import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,  // Indica que el componente es standalone
  imports: [FormsModule],  // Importa FormsModule aquí
  templateUrl: './login.component.html',
})
export class LoginComponent {
  usuario: string = '';
  pass: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.getUsuarios().subscribe((usuarios) => {
      const user = usuarios.find(u => u.usuario === this.usuario && u.pass === this.pass);
      
      if (user) {
        this.authService.login();
        this.router.navigate(['/personas']);
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    });
  }
}
