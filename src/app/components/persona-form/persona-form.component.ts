import { Component } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../models/persona';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para usar ngModel

@Component({
  standalone: true,  // Indicar que el componente es standalone
  imports: [FormsModule],  // Importar FormsModule directamente en el componente
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
})
export class PersonaFormComponent {
  persona: Persona = new Persona();

  constructor(private personaService: PersonaService, private router: Router) {}

  createPersona(): void {
    this.personaService.createPersona(this.persona).subscribe(() => {
      this.router.navigate(['/personas']);
    });
  }
}
