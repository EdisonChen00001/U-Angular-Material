import { Component, OnInit, EventEmitter,Output} from '@angular/core';
import {  } from 'events';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css']
})
export class CookpitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() bluePrintCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  //newServerName = '';
  newServerContent = '';

  onAddServer(nameInput:HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent});
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent});
  }

}
