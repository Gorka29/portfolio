import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../services/shared.service'; // Asumiendo que tienes un servicio compartido

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.scss'
})
export class SobreMiComponent implements OnInit {
  @ViewChild('sobreMiSection') sobreMiSection!: ElementRef;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.sharedService.setCurrentSection('SOBRE MÍ');
          }
        });
      },
      { threshold: 0.5 } // Ajusta este valor según necesites
    );

    // Observamos cuando el componente esté listo
    setTimeout(() => {
      if (this.sobreMiSection) {
        observer.observe(this.sobreMiSection.nativeElement);
      }
    });
  }

  ngOnDestroy() {
    // Limpieza del observer si es necesario
  }
}
