import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("Init Contatti Component");
  }

  ngOnDestroy() {
    console.log("Destroy Contatti Component");
  }

}
