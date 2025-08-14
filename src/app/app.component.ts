import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, MatToolbarModule, MatButtonModule , MatIconModule, RouterOutlet, RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const header = document.getElementById('header');

    // Toggle mobile menu
    hamburger?.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks?.classList.toggle('active');
    });

    // Change header on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    });
  }
}