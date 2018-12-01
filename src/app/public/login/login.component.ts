import { Component, OnInit, OnDestroy } from '@angular/core';
import { PublicService } from '../public.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(public navPublic: PublicService) { }

  ngOnInit() {
    console.log("Init Login Component");
  }

  ngOnDestroy() {
    console.log("Destroy Login Component");
  }

}
