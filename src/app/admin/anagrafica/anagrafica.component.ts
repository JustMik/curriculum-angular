import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-anagrafica',
  templateUrl: './anagrafica.component.html',
  styleUrls: ['./anagrafica.component.css']
})
export class AnagraficaComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("Init Anagrafica Component");
  }

  ngOnDestroy() {
    console.log("Destroy Anagrafica Component");
  }

}
