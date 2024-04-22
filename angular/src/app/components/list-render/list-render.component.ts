import { Component, OnInit } from '@angular/core';
import { Animals } from 'src/app/Animals';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animals[] = [
    {name: "Turca", type: "Dog", age: 1},
    {name: "Tom", type: "Cat", age: 2},
    {name: "Jack", type: "Dog", age: 3},
    {name: "Valente", type: "Horse", age: 4}
  ]

  AnimalAge: string = '';
  showAgeFlag: boolean = false

  constructor(private listService: ListService) { }


  ngOnInit(): void {
  }

  showAge(animal: Animals): void {
    if(this.showAgeFlag) {
      this.AnimalAge = '';
    } else {
    this.AnimalAge = `O pet ${animal.name} tem ${animal.age} anos!`
    }
    this.showAgeFlag = !this.showAgeFlag;
  }

  removeAnimal(animal: Animals) : void {
    console.log('Removendo animal');
    this.animals = this.listService.remove(this.animals, animal)
    
  }

}
