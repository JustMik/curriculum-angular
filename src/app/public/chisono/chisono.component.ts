import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from '../../logger/logger.service';

@Component({
  selector: 'app-chisono',
  templateUrl: './chisono.component.html',
  styleUrls: ['./chisono.component.css']
})
export class ChisonoComponent implements OnInit, OnDestroy {

  constructor(private logger: LoggerService) {
    logger.info('Provaaaaa');
  }

  ngOnInit() {
    console.log("Init Chisono Component");
  }

  ngOnDestroy() {
    console.log("Destroy Chisono Component");
  }

}
