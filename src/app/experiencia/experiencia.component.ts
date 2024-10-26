import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent {
  cv = [
    {
      fechaInicio: 'SEP 2023',
      fechaFin: 'JUN 2024',
      titulo: 'Desarrollador front-end',
      empresa: 'NexTret',
      descripcion: 'Migración de web con JSP a Angular y Java. Migración de aplicación Excel a web con Angular y Java. Gestión de proyectos con Atlassian (Jira y Bitbucket) y GIT. Uso de metodologías ágiles (Scrum, Kanban, Agile).',
      tecnologias: ['Angular', 'Java', 'Jira', 'Bitbucket', 'GIT', 'Scrum', 'Kanban']
    },
    {
      fechaInicio: 'DIC 2022',
      fechaFin: 'SEP 2023',
      titulo: 'Desarrollador full-stack',
      empresa: 'Didaktiker',
      descripcion: 'Desarrollo y diseño de aplicaciones internas utilizando Angular y Spring Boot. Gestión de proyectos con Atlassian (Jira y Bitbucket) y GIT. Metodologías ágiles (Scrum, Kanban, Agile).',
      tecnologias: ['Angular', 'Spring Boot', 'Jira', 'Bitbucket', 'GIT', 'Scrum', 'Kanban']
    },
    {
      fechaInicio: 'DIC 2021',
      fechaFin: 'DIC 2022',
      titulo: 'Desarrollador full-stack',
      empresa: 'Altia',
      descripcion: 'Creación y diseño del sistema de Bolsa Nacional de Empleo (BNE) de Chile utilizando Thymeleaf y Spring MVC. Desarrollo de otros proyectos con Angular y Spring Boot. Gestión de proyectos con Dedalo y SVN. Uso de metodologías ágiles (Scrum, Kanban, Agile).',
      tecnologias: ['Thymeleaf', 'Spring MVC', 'Angular', 'Spring Boot', 'Dedalo', 'SVN', 'Scrum', 'Kanban']
    },
    {
      fechaInicio: 'OCT 2020',
      fechaFin: 'JUN 2021',
      titulo: 'Desarrollador full-stack',
      empresa: 'PKF Attest',
      descripcion: 'Realización y diseño de diversos proyectos utilizando Salesforce y tecnologías como Angular y Spring Boot. Gestión de proyectos con GIT.',
      tecnologias: ['Salesforce', 'Angular', 'Spring Boot', 'GIT']
    }
  ];

}
