import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Ecommerce-Project';
    sayHello(){
      return "Hello this is, " + this.title
    }
}
