import { Component, OnInit, AfterViewInit } from '@angular/core';
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
import { CommonModule } from '@angular/common';

import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, InicioComponent, SobreMiComponent, ExperienciaComponent, ContactoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
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

  ngAfterViewInit() {
    // Configuración inicial del trazo y la bola
    gsap.set("#text-path", { drawSVG: "0%" }); // Inicialmente oculta el trazo
    gsap.set(".ball", { xPercent: -50, yPercent: -50 }); // Centra la bola en el trazo

    // Línea de tiempo para la animación
    const timeline = gsap.timeline({
      repeat: -1,
      yoyo: true // Añadido efecto yoyo
    });

    // Dibuja el trazo del texto
    timeline.to("#text-path", {
      duration: 5,
      drawSVG: "100%",
      ease: "none"
    });

    // Anima la bola para que siga el trazo del texto
    timeline.to(".ball", {
      duration: 5,
      motionPath: {
        path: "#text-path",
        align: "#text-path",
        alignOrigin: [0.5, 0.5]
      },
      ease: "none"
    }, 0);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculamos el offset basado en la altura del header
      const header = document.querySelector('header');
      const offset = header ? header.getBoundingClientRect().height : 0;

      // Calculamos la posición final de una vez
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Realizamos el scroll suave en una sola operación
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
