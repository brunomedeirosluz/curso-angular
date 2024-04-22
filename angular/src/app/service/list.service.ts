import { Injectable } from '@angular/core';

import { Animals } from '../Animals';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animals[], animal: Animals) {
    return animals.filter((a) => animal.name !== a.name);
  };
};
