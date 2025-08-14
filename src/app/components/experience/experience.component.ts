import { Component, ElementRef, OnInit, ViewChild, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @ViewChild('timeline') timeline!: ElementRef;
  
  experiences: Experience[] = [
    {
      role: 'Software Development Intern',
      company: 'Codehop Interfusion',
      period: 'Jan 2024 - Jul 2024',
      description: 'Developed web applications using Angular & Spring Boot.'
    },
    {
      role: 'Campus Manager Intern',
      company: 'Talent Battle',
      period: 'May 2023 - Nov 2023',
      description: 'Managed campus events and promoted coding competitions.'
    }
  ];

  constructor() {
    afterNextRender(() => {
      this.setupIntersectionObserver();
    });
  }

  ngOnInit(): void {}

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
      observer.observe(item);
    });
  }
}