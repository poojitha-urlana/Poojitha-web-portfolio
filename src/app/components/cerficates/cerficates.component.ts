import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cerficates',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cerficates.component.html',
  styleUrl: './cerficates.component.css'
})
export class CerficatesComponent {

  certificates = [
    {
      title: 'Spring Boot Development',
      issuer: 'Udemy',
      date: 'Jan 2024',
      image: 'assets/certificates/springboot.png'
    },
    {
      title: 'SQL (Basic)',
      issuer: 'HackerRank',
      date: 'Feb 2024',
      image: 'assets/certificates/sql.png'
    },
    {
      title: 'Programming in Java',
      issuer: 'NPTEL',
      date: 'Mar 2024',
      image: 'assets/certificates/java.png'
    }
  ];
}
