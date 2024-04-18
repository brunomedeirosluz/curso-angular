import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: String = "Bruno";
  age: number = 29;
  profissao: String = "Desenvolvedor";

  constructor() { }

  ngOnInit(): void {
  }

}
