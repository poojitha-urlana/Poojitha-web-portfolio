import { Component, AfterViewInit, HostListener, Inject, PLATFORM_ID, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import * as THREE from 'three';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {

  @ViewChild('globeCanvas', { static: true }) globeCanvas!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private earth!: THREE.Mesh;
  private clouds!: THREE.Mesh;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initGlobe();
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (!this.isBrowser) return;
    const canvas = this.globeCanvas.nativeElement;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  initGlobe() {
    const canvas = this.globeCanvas.nativeElement;
    this.scene = new THREE.Scene();

    // Camera further away for full background
    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    this.scene.add(directionalLight);

    // Textures
    const loader = new THREE.TextureLoader();
    const earthTexture = loader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
    const bumpMap = loader.load('https://threejs.org/examples/textures/planets/earth_bump_2048.jpg');
    const specularMap = loader.load('https://threejs.org/examples/textures/planets/earth_specular_2048.jpg');
    const cloudsTexture = loader.load('https://threejs.org/examples/textures/planets/earth_clouds_1024.png');

    // Larger Earth
    const earthGeo = new THREE.SphereGeometry(2, 64, 64);
    const earthMat = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpMap: bumpMap,
      bumpScale: 0.05,
      specularMap: specularMap,
      specular: new THREE.Color('grey')
    });
    this.earth = new THREE.Mesh(earthGeo, earthMat);
    this.scene.add(this.earth);

    // Clouds
    const cloudGeo = new THREE.SphereGeometry(2.02, 64, 64);
    const cloudMat = new THREE.MeshPhongMaterial({
      map: cloudsTexture,
      transparent: true
    });
    this.clouds = new THREE.Mesh(cloudGeo, cloudMat);
    this.scene.add(this.clouds);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      this.earth.rotation.y += 0.0025;
      this.clouds.rotation.y += 0.003;
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

  sendMessage() {
    console.log("Form submitted");
  }
}
