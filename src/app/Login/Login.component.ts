import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  reactiveloginForm=new FormGroup({
    username:new FormControl(""),
    password:new FormControl(""),
    cpassword:new FormControl("")
  });

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) {

   }

   reactiveloginForm1=this.fb.group({
    username:[,[Validators.required,Validators.minLength(8)]], //[phaceholder,[validatuon]]
    password:[,[Validators.required,Validators.minLength(8)]],
   })


   login(){
    this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
      const username=res.find((result:any)=>{
        return result.username === this.reactiveloginForm1.value.username
        && result.password === this.reactiveloginForm1.value.password
      });
      if(username){
        alert("login success");
        this.reactiveloginForm1.reset();
        this.router.navigate(['home']);
      }
      else{
        alert ("user not found")
      }
    });
   }


  ngOnInit() {
  }

}


//   constructor() { }

//   ngOnInit() {
//   }

// }
