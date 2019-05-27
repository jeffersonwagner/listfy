import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;


  constructor() { }

  ngOnInit() {
  }

}
