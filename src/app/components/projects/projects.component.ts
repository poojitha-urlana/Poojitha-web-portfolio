import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Smart Farming System',
      image: 'assets/images/smart-farming.jpg',
      description: 'A web-based smart farming system using Angular, Spring Boot, and IoT sensors for real-time crop monitoring and recommendations.',
      github: 'https://github.com/yourusername/smart-farming',
      demo: 'https://smart-farming-demo.com'
    },
    {
      title: 'Credit Tracker',
      image: 'assets/images/credit-tracker.jpg',
      description: 'An application to track and analyze personal and business credits, with visualization and export features.',
      github: 'https://github.com/yourusername/credit-tracker',
      demo: 'https://credit-tracker-demo.com'
    },
    {
      title: 'Safety Net',
      image: 'assets/images/safety-net.jpg',
      description: 'An AI-based safety alert and incident reporting system with real-time location tracking.',
      github: 'https://github.com/yourusername/safety-net',
      demo: 'https://safety-net-demo.com'
    },
    {
      title: 'Safety Net',
      image: 'assets/images/safety-net.jpg',
      description: 'An AI-based safety alert and incident reporting system with real-time location tracking.',
      github: 'https://github.com/yourusername/safety-net',
      demo: 'https://safety-net-demo.com'
    }
  ];
}
