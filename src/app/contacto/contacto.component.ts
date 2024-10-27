import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  manejarEnvio() {
    console.log('Formulario enviado', {
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje
    });
    // Aquí puedes agregar la lógica para enviar el formulario
  }
}
