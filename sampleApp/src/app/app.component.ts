import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import { GlobalsService } from './globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  private regForm:any;
  constructor(private router: Router,
    private globalsService: GlobalsService
    ) { 
  }
  title = 'sampleApp';
  validated:boolean = GlobalsService.validated;
  
  ngOnInit(){
    
  }
  loginUser(form: NgForm) {
    console.log(form.value);
    //alert('username is :: '+form.value.userName+'...password is ::'+form.value.password);
    if( form.value.userName === 'abhiram' && form.value.password === 'tilak' ){
      //this.validated = true;
      GlobalsService.validated=true;
      this.validated=GlobalsService.validated;
      this.router.navigate(['/dashboard']);
    }
    else{
      //this.validated = false;
      GlobalsService.validated=false;
     this.validated=GlobalsService.validated;
      this.router.navigate(['/']);
    }
  }
}
