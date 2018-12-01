import { Component, OnInit,  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("Init Curriculum Component");
  }

  ngOnDestroy() {
    console.log("Destroy Curriculum Component");
  }

}
