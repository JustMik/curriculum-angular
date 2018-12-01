import { Component, OnInit, OnDestroy } from '@angular/core';
import { PublicService } from './public.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
  providers: [ PublicService ]
})
export class PublicComponent implements OnInit, OnDestroy {

  constructor(public navPublic: PublicService) { }

  ngOnInit() {
    console.log("Init Public Component")
  }

  ngOnDestroy() {
    console.log("Destroy Public Component");
  }

}
