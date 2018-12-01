import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {
  visible: boolean;

  constructor() { this.visible = false; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

}
