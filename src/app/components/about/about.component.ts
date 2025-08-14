import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('aboutSection') aboutSection!: ElementRef;

  techIcons = [
    { src: 'assets/icons/angular.png', name: 'Angular', delay: '0s' },
    { src: 'assets/icons/spring-boot.png', name: 'Spring Boot', delay: '0.2s' },
    { src: 'assets/icons/typescript.png', name: 'TypeScript', delay: '0.4s' },
    { src: 'assets/icons/java.png', name: 'Java', delay: '0.6s' },
    { src: 'assets/icons/mysql.png', name: 'MySQL', delay: '0.8s' },
    { src: 'assets/icons/html5.png', name: 'HTML5', delay: '1.0s' },
    { src: 'assets/icons/css3.png', name: 'CSS3', delay: '1.2s' },
    { src: 'assets/icons/git.png', name: 'Git', delay: '1.4s' }
  ];

  ngAfterViewInit() {
    // Only initialize GSAP ScrollTrigger if it's available
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      // Parallax effect for background elements
      gsap.to(this.aboutSection.nativeElement.querySelector('.about::before'), {
        y: 50,
        scrollTrigger: {
          trigger: this.aboutSection.nativeElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.to(this.aboutSection.nativeElement.querySelector('.about::after'), {
        y: -50,
        scrollTrigger: {
          trigger: this.aboutSection.nativeElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }
}