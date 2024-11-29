import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const form = document.getElementById('fs-frm') as HTMLFormElement;
    const formResponse = document.getElementById('form-response');

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        try {
          const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
              'Accept': 'application/json'
            }
          });

          if (response.ok) {
            if (formResponse) {
              formResponse.textContent = '¡Mensaje enviado con éxito!';
              form.reset();
            }
          } else {
            throw new Error('Error al enviar el formulario');
          }
        } catch (error) {
          if (formResponse) {
            formResponse.textContent = 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.';
          }
        }
      });
    }
  }
}
