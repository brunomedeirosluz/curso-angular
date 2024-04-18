import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Bruno";
  dados = {
    email: "teste@teste.com.br",
    cargo: "teste",
  };
  

  title = 'angular';
}
