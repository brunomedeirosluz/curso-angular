import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animals } from 'src/app/Animals';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  animal?: Animals

  constructor(private listService: ListService, private route: ActivatedRoute ) {
    this.getAnimal();
   }

  ngOnInit(): void {
  }

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }

}
