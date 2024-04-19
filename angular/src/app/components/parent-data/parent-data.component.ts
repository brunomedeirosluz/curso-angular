import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  @Input() UserName: String = '';
  @Input() dados!: { email: String, cargo: String, cidade: String };

  constructor() { }

  ngOnInit(): void {
  }

}
