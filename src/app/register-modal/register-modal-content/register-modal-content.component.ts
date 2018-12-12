import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-register-modal-content',
  templateUrl: './register-modal-content.component.html',
  styleUrls: ['./register-modal-content.component.css']
})
export class RegisterModalContentComponent implements OnInit {
  pickwinlogo = '../../assets/img/pickwinColores-50.png';

  constructor( public activeModal: NgbActiveModal ) { }

  ngOnInit() {
  }

}
