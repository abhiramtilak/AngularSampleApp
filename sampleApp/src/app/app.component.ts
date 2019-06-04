import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  private regForm:any;
  constructor(private router: Router) { 
  }
  title = 'sampleApp';
  userName = 'static';
  public  validated = false;
  ngOnInit(){}
  loginUser(form: NgForm) {
    console.log(form.value);
    alert('username is :: '+form.value.userName+'...password is ::'+form.value.password);
    if( form.value.userName === 'abhiram' && form.value.password === 'tilak' ){
      this.validated = true;
      this.router.navigate(['/dashboard']);
    }
    else{
      this.validated = false;
      this.router.navigate(['/']);
    }
  }
}
