import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public loginform!:FormGroup
  adminapi = environment.adminapi;
  
  submitted = false;
  get f(){
    return this.loginform.controls;
  }
    constructor(private formBuilder:FormBuilder, private http:HttpClient,private router: Router,private adminservice:AdminService) { }
  
    ngOnInit(): void {
      this.adminservice.validateAuth(false);
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
  
      this.http.get<any>(this.adminapi).subscribe(res=>{
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
        this.router.navigate(['proo'])
        this.adminservice.validateAuth(true);
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
       
        this.adminservice.validateAuth(false);
      }
    })
    }
}
