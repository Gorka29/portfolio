import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  menuAbierto: boolean = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu() {
    this.menuAbierto = false;
  }

  @Output() sectionSelected = new EventEmitter<string>();

  onSectionClick(sectionId: string) {
    this.sectionSelected.emit(sectionId);
  }

  seccionActual: string = 'Inicio';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.actualizarSeccionActual();
    });
    // Estas dos líneas hacen lo siguiente:

    // 1. gsap.registerPlugin(ScrollTrigger);
    // Esta línea registra el plugin ScrollTrigger con GSAP (GreenSock Animation Platform).
    // ScrollTrigger es una herramienta poderosa que permite crear animaciones basadas en el scroll.
    // Al registrarlo, se habilita su uso en toda la aplicación.

    // 2. this.setupScrollTriggers();
    // Esta línea llama al método setupScrollTriggers() de este componente.
    // Este método probablemente configura los disparadores de scroll para las diferentes secciones de la página,
    // permitiendo actualizar la sección actual basándose en la posición del scroll.

    gsap.registerPlugin(ScrollTrigger);
    this.setupScrollTriggers();
  }

  actualizarSeccionActual() {
    const rutaActual = this.router.url.split('/')[1] || 'inicio';
    this.seccionActual = this.capitalizarPrimeraLetra(rutaActual);
  }

  setupScrollTriggers() {
    const secciones = ['inicio', 'sobre-mi', 'experiencia', 'contacto'];

    secciones.forEach(seccion => {
      ScrollTrigger.create({
        trigger: `#${seccion}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => this.actualizarTextoSeccion(seccion),
        onEnterBack: () => this.actualizarTextoSeccion(seccion)
      });
    });
  }

  actualizarTextoSeccion(seccion: string) {
    this.seccionActual = this.capitalizarPrimeraLetra(seccion);
  }

  capitalizarPrimeraLetra(texto: string): string {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }

}
