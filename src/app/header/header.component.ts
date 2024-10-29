import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() sectionSelected = new EventEmitter<string>();

  menuAbierto: boolean = false;

  constructor() {}

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu() {
    this.menuAbierto = false;
  }

  onSectionClick(sectionId: string) {
    this.sectionSelected.emit(sectionId);
    this.cerrarMenu();
  }

}
