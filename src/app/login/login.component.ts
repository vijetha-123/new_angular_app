import { Component, OnInit } from '@angular/core';
import { error } from '@angular/compiler/src/util';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup ,FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/**export class LoginComponent implements OnInit {
  public loginForm!:FormGroup
  //Authenticate user details from userapi
  userapi=environment.userapi;
  
  submitted = false;
  get f() { return this.loginForm.controls; }
  //constructor injection
    constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,
      private userService: UserService) { }
  
    ngOnInit(): void {
      this.userService.validateAuth(false); //data parameter in your userservice
      this.loginForm = this.formBuilder.group({
        useremail: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]]
          });
    }
    login(){
      this.submitted = true;
      if (this.loginForm.invalid) {
        return ;
      }
      this.http.get<any>(this.userapi)
      .subscribe(res=>{
        const user=res.find((a:any)=>{
          return a.useremail === this.loginForm.value.useremail && a.password === this.loginForm.value.password
        });
        if(user){
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          })
      
          Toast.fire({
            icon: 'success',
            title: 'Login Successful'
          })
          this.loginForm.reset();
          this.router.navigate([''])
          this.userService.validateAuth(true);
        }else{
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          })
      
          Toast.fire({
            icon: 'error',
            title: 'User not found'
          })       
          this.userService.validateAuth(false);
        }
      })
    }
  }
**/


export class LoginComponent implements OnInit {
  public loginform!:FormGroup
  userapi = environment.userapi;
  
  submitted = false;
  get f(){
    return this.loginform.controls;
  }
    constructor(private formBuilder:FormBuilder, private http:HttpClient,private router: Router,private userservice:UserService) { }
  
    ngOnInit(): void {
      this.userservice.validateAuth(false);
      this.loginform=this.formBuilder.group({
        useremail: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
        //useremail:['',[Validators.required,Validators.email,Validators.pattern('[A-Za-z0-9]*')]],
        //password:['',Validators.required]
      });
    }
    
    login(){
      this.submitted=true;
      if(this.loginform.invalid){
        return;
      }
  
      this.http.get<any>(this.userapi).subscribe(res=>{
        const user=res.find((a:any)=>{
          return a.useremail === this.loginform.value.useremail && a.password === this.loginform.value.password
        });
        if(user){
        const Toast=Swal.mixin({
          toast: true,
          position:'bottom',
          showConfirmButton: false,
          timer:2000,
          timerProgressBar:true
        })
        Toast.fire({
          icon:'success',
          title:'login successful'
        })
        this.loginform.reset();
        this.router.navigate([''])
        this.userservice.validateAuth(true);
      }
      else{
        const Toast=Swal.mixin({
          toast: true,
          position:'top',
          showConfirmButton: false,
          timer:3000,
          timerProgressBar:true
        })
        Toast.fire({
          icon:'error',
          title:'user not found'
        })
       
        this.userservice.validateAuth(false);
      }
    })
    }
  
  
}
