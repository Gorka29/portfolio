import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent implements OnInit, AfterViewInit {
  cv = [
    {
      fechaInicio: 'SEP 2023',
      fechaFin: 'JUN 2024',
      titulo: 'Desarrollador front-end',
      empresa: 'NexTret',
      descripcion: 'Migración de web con JSP a Angular y Java. Migración de aplicación Excel a web con Angular y Java. Gestión de proyectos con Atlassian (Jira y Bitbucket) y GIT. Uso de metodologías ágiles (Scrum, Kanban, Agile).',
      tecnologias: ['Angular', 'Typescript', 'Spring Boot', 'SCSS', 'Chroome DevTools', 'MySQL', 'Jira', 'Bitbucket', 'GIT', 'Scrum', 'Kanban']
    },
    {
      fechaInicio: 'DIC 2022',
      fechaFin: 'SEP 2023',
      titulo: 'Desarrollador full-stack',
      empresa: 'Didaktiker',
      descripcion: 'Desarrollo y diseño de aplicaciones internas utilizando Angular y Spring Boot. Gestión de proyectos con Atlassian (Jira y Bitbucket) y GIT. Metodologías ágiles (Scrum, Kanban, Agile).',
      tecnologias: ['Angular', 'Spring Boot', 'Typescript', 'PHP', 'SCSS', 'Chroome DevTools', 'MySQL', 'Jira', 'Bitbucket', 'GIT', 'Scrum', 'Kanban']
    },
    {
      fechaInicio: 'DIC 2021',
      fechaFin: 'DIC 2022',
      titulo: 'Desarrollador full-stack',
      empresa: 'Altia',
      descripcion: 'Creación y diseño del sistema de Bolsa Nacional de Empleo (BNE) de Chile utilizando Thymeleaf y Spring MVC. Desarrollo de otros proyectos con Angular y Spring Boot. Gestión de proyectos con Dedalo y SVN. Uso de metodologías ágiles (Scrum, Kanban, Agile).',
      tecnologias: ['Angular', 'Typescript', 'Javascript','Spring Boot', 'Spring MVC', 'Thymeleaf', 'SCSS', 'Chroome DevTools', 'MySQL', 'Dedalo', 'SVN', 'Scrum', 'Kanban']
    },
    {
      fechaInicio: 'OCT 2020',
      fechaFin: 'JUN 2021',
      titulo: 'Desarrollador full-stack',
      empresa: 'PKF Attest',
      descripcion: 'Realización y diseño de diversos proyectos utilizando Salesforce y tecnologías como Angular y Spring Boot. Gestión de proyectos con GIT.',
      tecnologias: ['Salesforce', 'Angular', 'Typescript', 'Javascript', 'Spring Boot', 'SCSS', 'Chroome DevTools', 'MySQL', 'Scrum', 'GIT']
    },
    {
      fechaInicio: 'FEB 2020',
      fechaFin: 'JUN 2020',
      titulo: 'Desarrollador full-stack',
      empresa: 'Versia',
      descripcion: 'Desarrollo de aplicaciones web y moviles para clientes de la empresa como Eroski. Gestión de proyectos con GIT.',
      tecnologias: ['HTML', 'CSS', 'Javascript', 'JQuery', 'Bootstrap', 'MySQL','GIT']
    }
  ];


  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    // Aseguramos que el header permanezca por encima
    gsap.set('header', {
      zIndex: 50,
      clearProps: 'opacity,transform'
    });

    const experiencias = document.querySelectorAll('.proyecto');
    experiencias.forEach((experiencia) => {
      gsap.from(experiencia, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: experiencia,
          start: "top 80%",
          end: "top 60%",
          toggleActions: "play none none reverse",
          markers: false
        }
      });
    });

    const tecnologias = document.querySelectorAll('.tecnologia');
    tecnologias.forEach((tecnologia) => {
      gsap.from(tecnologia, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: tecnologia,
          start: "top 85%",
          end: "top 60%",
          toggleActions: "play none none reverse",
          markers: false
        }
      });
    });
  }
}
