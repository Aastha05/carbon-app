import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'carbon-ui';
  userData;
  constructor(
    private httpClient: HttpClient
  ){

  }

  ngOnInit(){
    this
      .httpClient
      .get('http://localhost:8080/user/profile')
      .subscribe((res:any) => {
        this.userData = res.data;
        let i = 0;
        i++;
        i++;
        i++;
      }, err => {
        console.warn(err);
      });
  }

}
