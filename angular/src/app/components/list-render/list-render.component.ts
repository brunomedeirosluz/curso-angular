import { Component, OnInit } from '@angular/core';
import { Animals } from 'src/app/Animals';
import { ListService } from 'src/app/service/list.service';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animals[] = []

  AnimalAge: string = '';
  AnimalExcluding: string = '';
  showAgeFlag: boolean = false

  constructor(private listService: ListService) {
    this.getAnimals();
   }


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

  removeAnimal(animal: Animals) {
    this.animals = this.listService.remove(this.animals, animal);
    this.AnimalExcluding = `O ${animal.name} foi excluido com sucesso!`
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals ));
  }
}
