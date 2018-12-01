import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("Init Experiences Component");
  }

  ngOnDestroy() {
    console.log("Destroy Experiences Component");
  }

}
