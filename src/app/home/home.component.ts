import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pickwinlogoBCO = '../../assets/img/pickwinBCO.png';
  pickwinlogowhite = '../../assets/img/pickwinBlanco-100.png';

  constructor() { }

  ngOnInit() {
  }

}
