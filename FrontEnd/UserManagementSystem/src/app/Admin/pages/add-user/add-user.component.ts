import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterationService } from '../../services/registeration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(private registerationService:RegisterationService){}

  registrationForm = new FormGroup({
    role: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
    ]),
  });

  get email() {
    return this.registrationForm.get('email');
  }

  get role() {
    return this.registrationForm.get('role');
  }

  get name() {
    return this.registrationForm.get('name');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.registerationService.registerUser(this.registrationForm.value).subscribe(
        response => {
          console.log(response);
          // Show success message using SweetAlert
          Swal.fire({
            icon: 'success',
            title: 'User registered successfully',
            showConfirmButton: false,
            timer: 1500
          });
          // Handle any other actions after registration
        },
        error => {
          console.error(error);
          // Handle error response
          Swal.fire({
            icon: 'error',
            title: 'Registration failed',
            text: 'Please try again later.',
          });
        }
      );
    }
  }
}
