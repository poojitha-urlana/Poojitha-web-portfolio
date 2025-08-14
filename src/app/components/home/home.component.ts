import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { loadSlim } from 'tsparticles-slim';
import { tsParticles } from 'tsparticles-engine';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { CerficatesComponent } from '../cerficates/cerficates.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, AboutComponent, ContactComponent, CerficatesComponent, SkillsComponent, ProjectsComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Typing effect variables
  typingTexts: string[] = [
    'Software Developer',
    'Java Full Stack Developer',
    'Web Developer'
  ];
  currentText: string = '';
  private textIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Load particle animation
      await loadSlim(tsParticles);

      tsParticles.load('tsparticles', {
        background: { color: '#121212' }, // Dark theme
        fpsLimit: 60,
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#00e5ff' }, // Particle color
          shape: { type: 'circle' },
          opacity: { value: 0.6, random: true },
          size: { value: { min: 1, max: 3 }, random: true },
          move: { enable: true, speed: 1.5, direction: 'none', outModes: { default: 'out' } },
          links: { // Connecting lines
            enable: true,
            distance: 180,
            color: '#00e5ff',
            opacity: 0.3,
            width: 1.2,
            shadow: {        // Neon glow effect
        enable: true,
        color: '#00e5ff',
        blur: 5
      }
          }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' }
          },
          modes: {
            repulse: { distance: 120, speed: 0.8 },
            push: { quantity: 4 }
          }
        }
      });

      // Start typing effect
      this.startTypingEffect();
    }
  }

  private startTypingEffect() {
    const speed = this.isDeleting ? 50 : 150;
    const currentFullText = this.typingTexts[this.textIndex];

    if (this.isDeleting) {
      this.currentText = currentFullText.substring(0, this.charIndex--);
    } else {
      this.currentText = currentFullText.substring(0, this.charIndex++);
    }

    if (!this.isDeleting && this.charIndex === currentFullText.length) {
      this.isDeleting = true;
      setTimeout(() => this.startTypingEffect(), 1000);
      return;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.typingTexts.length;
    }

    setTimeout(() => this.startTypingEffect(), speed);
  }
}
