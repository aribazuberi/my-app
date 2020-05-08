import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  data1: string;
  data2: string;
  data: string;
  operator= " ";
  eq= " ";
  

  add()
  {
    this.data=(Number(this.data1)+Number(this.data2)).toString();
    this.operator="+";
    this.eq="=";
  
  }
  sub()
  {
    this.data=(Number(this.data1)-Number(this.data2)).toString();
    this.operator="-";
    this.eq="=";
  
  }
  mul()
  {
    this.data=(Number(this.data1)*Number(this.data2)).toString();
    this.operator="*";
    this.eq="=";
  
  }
  did()
  {
    this.data=(Number(this.data1)/Number(this.data2)).toString();
    this.operator="/";
    this.eq="=";
  
  }
  clr()
  {
    this.data= '';
    this.data1='';
    this.data2='';
    this.operator=" ";
    this.eq=" ";
  
  }


}
