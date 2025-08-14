import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: 'fab fa-angular', category: 'Frontend', level: 90 },
    { name: 'Spring Boot', icon: 'fas fa-server', category: 'Backend', level: 85 },
    { name: 'Java', icon: 'fab fa-java', category: 'Backend', level: 80 },
    { name: 'JavaScript', icon: 'fab fa-js', category: 'Frontend', level: 85 },
    { name: 'MySQL', icon: 'fas fa-database', category: 'Database', level: 75 },
    { name: 'HTML5', icon: 'fab fa-html5', category: 'Frontend', level: 90 },
    { name: 'CSS3', icon: 'fab fa-css3-alt', category: 'Frontend', level: 85 },
    { name: 'Git', icon: 'fab fa-git-alt', category: 'Tools', level: 80 }
  ];
}
