import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service'; // Servicio ya creado
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css'],
  providers: [UsuarioService]
})
export class UsuarioFormComponent {
  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  createUsuario(): void {
    this.usuarioService.createUsuario(this.usuario).subscribe(() => {
      this.router.navigate(['/usuarios']);
    });
  }
}
