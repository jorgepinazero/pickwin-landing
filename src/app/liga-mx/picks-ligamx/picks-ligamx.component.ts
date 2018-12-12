import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RegisterModalComponent} from '../../register-modal/register-modal.component';
import {LoginModalComponent} from '../../login-modal/login-modal.component';

class Match {
  constructor(
    public localName: string,
    public localImg: string,
    public visitorName: string,
    public visitorImg: string,
    public date: string,
    public hour: string
  ) {}
}

class Props {
  constructor(
    public title: string,
    public left: string,
    public middle: string,
    public right: string
  ) {}
}

@Component({
  selector: 'app-picks-ligamx',
  templateUrl: './picks-ligamx.component.html',
  styleUrls: ['./picks-ligamx.component.css']
})
export class PicksLigamxComponent implements OnInit {
  matches: Match[] = [
    new Match(
      'Amarillos',
      '../../../assets/img/p-amarillos.png',
      'Azules',
      '../../../assets/img/p-azules.png',
      '24 Dic.',
      '08:00hrs'
    ),
    new Match(
      'Blancos',
      '../../../assets/img/p-blancos.png',
      'Negros',
      '../../../assets/img/p-negros.png',
      '25 Dic.',
      '09:00hrs'
    ),
    new Match(
      'Rojos',
      '../../../assets/img/p-rojos.png',
      'Rosas',
      '../../../assets/img/p-rosas.png',
      '26 Dic.',
      '10:00hrs'
    )
  ];

  props: Props[] = [
    new Props(
      'NÚMERO DE GOLES EN EL PARTIDO - [ MVL VS CPM ]',
      'MENOR',
      '2.5',
      'MAYOR'
    ),
    new Props(
      'NÚMERO DE GOLES EN EL PARTIDO - [ LL VS BGD ]',
      'MENOR',
      '2.5',
      'MAYOR'
    ),
    new Props(
      'NÚMERO DE GOLES EN EL PARTIDO - [ CPM VS MVL ]',
      'MENOR',
      '2.5',
      'MAYOR'
    ),
  ];

  quinielasIconBco = '../../../assets/img/quinielasIconBlanco-50.png';
  savePick = '../../../assets/img/guardarPicks-50.png';

  pickLocal = 'col-4 pick-category1';
  pickTie = 'col-2 pick-category1';
  pickVisitor = 'col-4 pick-category1';

  // Variables for the picks background (teams)
  pl0 = this.pickLocal;

  pt0 = this.pickTie;

  pv0 = this.pickVisitor;

  booleanA = true;
  booleanB = true;
  booleanC = true;

  // Variables for the num goles change
  numGolesLabelLeft = 'num-goles-label num-goles-left';
  numGolesLabelRight = 'num-goles-label num-goles-right';

  nGLL0 = this.numGolesLabelLeft;

  nGLR0 = this.numGolesLabelRight;

  // Variable for "desempates" select field
  options = 1;
  optionPick: number[] = [];

  // Methods for Team Picks Background change
  onClickLocal0() {
    this.booleanA = false;
    this.booleanB = true;
    this.booleanC = true;
  }
  onClickTie0() {
    this.booleanA = true;
    this.booleanB = false;
    this.booleanC = true;
  }
  onClickVisitor0() {
    this.booleanA = true;
    this.booleanB = true;
    this.booleanC = false;
  }

  // Methods for the num goles change background
  onClickMinorLeft0() {
    this.nGLL0 = 'num-goles-label num-goles-left pick-selected2';
    this.nGLR0 = this.numGolesLabelRight;
  }

  onClickMinorRight0() {
    this.nGLL0 = this.numGolesLabelLeft;
    this.nGLR0 = 'num-goles-label num-goles-right pick-selected2';
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.optionPick[i] = this.options;
      this.options++;
    }
  }

  openRegister() {
    const modalRef = this.modalService.open(RegisterModalComponent, {});
    modalRef.componentInstance.name = 'Register';
  }

  openLogin() {
    const modalRef = this.modalService.open(LoginModalComponent, {});
    modalRef.componentInstance.name = 'Register';
  }

}
