import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule para usar *ngFor
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
  providers: [UsuarioService],
  imports: [CommonModule] // Asegurarte de que CommonModule esté importado
})
export class UsuarioListComponent {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }

  deleteUsuario(id: number): void {
    this.usuarioService.deleteUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter(usuario => usuario.identificador !== id);
    });
  }
}
