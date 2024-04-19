import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Bruno de Medeiros Luz";
  dados = {
    email: "teste@teste.com.br",
    cidade: "Igarapé",
    cargo: "teste",

  };
  

  title = 'angular';
}
