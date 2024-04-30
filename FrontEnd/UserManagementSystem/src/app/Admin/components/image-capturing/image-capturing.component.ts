import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-image-capturing',
  templateUrl: './image-capturing.component.html',
  styleUrls: ['./image-capturing.component.css']
})
export class ImageCapturingComponent {
  @ViewChild('video', { static: true }) videoElement: any;
  @ViewChild('canvas', { static: true }) canvas: any;

  videoWidth = 0;
  videoHeight = 0;
  imageUrl = '';

  constructor(private route:Router) { }

  ngOnInit() {
    this.startCamera();
  }

  startCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.videoElement.nativeElement.srcObject = stream;
        this.videoElement.nativeElement.play();
      });
    }
  }

  capture() {
    const context = this.canvas.nativeElement.getContext('2d');
    context.drawImage(this.videoElement.nativeElement, 0, 0, this.videoWidth, this.videoHeight);
    const imageUrl = this.canvas.nativeElement.toDataURL('image/png');
  
    // Store the captured image in local storage
    this.storeImage(imageUrl);
  
    // Display a success message using SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Image Captured',
      text: 'Image captured successfully and stored in local storage',
      timer: 2000, // Close the alert after 2 seconds
      showConfirmButton: false
    });
  }
  
  storeImage(imageUrl: string): void {
    // Store the captured image in local storage
    localStorage.setItem('capturedImage', imageUrl);
    console.log('Image stored successfully');
    this.route.navigate(["./dashboard"])
  }
}