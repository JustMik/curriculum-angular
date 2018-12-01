import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("Init Skills Component");
  }

  ngOnDestroy() {
    console.log("Destroy Skills Component");
  }

}
