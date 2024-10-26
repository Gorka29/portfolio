import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ScrollService } from './scroll.service';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, InicioComponent, SobreMiComponent, ExperienciaComponent, ContactoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private router: Router, private scrollService: ScrollService, private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const tree = this.router.parseUrl(this.router.url);
      if (tree.fragment) {
        this.scrollService.scrollToElement(tree.fragment);
      }
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Ajuste adicional después de un pequeño retraso para asegurar la posición
      setTimeout(() => {
        const yOffset = -70; // Ajuste en píxeles, cámbialo según sea necesario
        const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }, 300); // Retardo para asegurarse de que el smooth scroll inicial se complete
    }
  }
}
