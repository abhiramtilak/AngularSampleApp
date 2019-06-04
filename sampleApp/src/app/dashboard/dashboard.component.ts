import { Component, OnInit } from '@angular/core';
import{ AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private appComponent: AppComponent,
    private router: Router    
    ) { }

  ngOnInit() {
    if( this.appComponent.validated === true ){
      this.router.navigate(['/dashboard']);
    } 
    else{
      this.router.navigate(['/']);
    }
  }


}
