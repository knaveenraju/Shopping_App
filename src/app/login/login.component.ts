import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  username:string;
   password:string;

  

 constructor(private formBuilder: FormBuilder,private router: Router, private data:  DataserviceService){}
 loginFunction(){
   this.loginForm = this.formBuilder.group({
 
     username:['', [Validators.required]],
     password :['', [Validators.required]]
   })
 }
 onSubmit(){
       if(!this.loginForm.valid){
         this.loginForm.markAllAsTouched();
          }
      else{
     this.username=this.loginForm.get('username').value;
   this.password=this.loginForm.get('password').value;



   if(this.username == 'naveen' && this.password == 'raju'){
     // this.router.navigate(['/home',this.username]);
     this.data.changeMessage(this.username);
      this.router.navigate(['/home'] ,{queryParams : {username:this.username}});
    }
    else {
      alert("Invalid credentials"); 
    }
      }
     }
 
 ngOnInit() {
   this.loginFunction();

 
}

}
