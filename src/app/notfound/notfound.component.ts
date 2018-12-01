import { Component, OnInit } from '@angular/core';
import { NotfoudScript } from './notfound.script';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    (new NotfoudScript).generateRandomLogic();
  }

}
