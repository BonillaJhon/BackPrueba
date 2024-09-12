import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar *ngFor y *ngIf
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-persona-list',
  standalone: true,
  imports: [CommonModule], // Asegúrate de importar CommonModule
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(data => {
      this.personas = data;
    });
  }

  deletePersona(id: number): void {
    this.personaService.deletePersona(id).subscribe(() => {
      this.personas = this.personas.filter(p => p.identificador !== id);
    });
  }
}
