import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("Init Admin Component");
  }

  ngOnDestroy() {
    console.log("Destroy Admin Component");
  }

}
