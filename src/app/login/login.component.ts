import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
//   loginForm : FormGroup;
//   username:string;
//    password:string; 

  

//  constructor(private formBuilder: FormBuilder,private router: Router, private data:  DataserviceService){}
//  loginFunction(){
//    this.loginForm = this.formBuilder.group({
 
//      username:['', [Validators.required]],
//      password :['', [Validators.required]]
//    })
//  }
//  onSubmit(){
//        if(!this.loginForm.valid){
//          this.loginForm.markAllAsTouched();
//           }
//       else{
//      this.username=this.loginForm.get('username').value;
//    this.password=this.loginForm.get('password').value;



//    if(this.username == 'naveen' && this.password == 'raju'){
    
//      this.data.changeMessage(this.username);
   
//       this.router.navigate(['/home']);
//     }
//     else {
//       alert("Invalid credentials"); 
//     }
//       }
//      }
 
//  ngOnInit() {
//    this.loginFunction();

 
// }

isLoginMode= true;
constructor(private LoginService:AuthService, private router: Router) { }


onSwitchMode() {
  this.isLoginMode = !this.isLoginMode;
}
onSubmit(form: NgForm) {
  if (!form.valid) {
    return;
  }
  const email = form.value.email;
  const password = form.value.password;
  if (this.isLoginMode) {
   this.LoginService.login(email, password).subscribe(
    resData => {
      console.log(resData);
      this.router.navigate(['/home']);
    });
  } else {
   this.LoginService.signup(email, password).subscribe(
    resData => {
      console.log(resData);
      this.router.navigate(['/home']);
    });
  }
  form.reset();
} 



}
