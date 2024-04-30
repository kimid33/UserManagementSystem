import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  successmsg="login successsfully";
  errormsg="provide valid email and password";

  constructor(private loginService:LoginService,private router:Router){}

  loginForm=new FormGroup({
    email:new FormControl('',[
      Validators.required,
    Validators.email,
    Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/),
    ]),
    password:new FormControl('',[
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
    ]),
  });

  
  get email()
  {
    return this.loginForm.get('email');
  }

  get password()
  {
    return this.loginForm.get('password');
  }

  loginHandle(){
    this.loginService.loginAdmin(this.loginForm.value).subscribe({
      next:(response)=>{
        localStorage.setItem('adminData',JSON.stringify(response))
         let toast =  Swal.mixin(
          {
            toast:true,
            position:'top-end',
            timer:3000,
            showConfirmButton:false,
            timerProgressBar:true
          }
         );
         toast.fire({
          icon:'success',
          title:this.successmsg,
         })

         this.router.navigate(['./imageCapture'])

      },
      error:error=>{
        let toast =  Swal.mixin(
          {
            toast:true,
            position:'top-end',
            timer:3000,
            showConfirmButton:false,
            timerProgressBar:true
          }
         );
         toast.fire({
          icon:'error',
          title:this.errormsg,
         })
      }
    })
  }  
}
