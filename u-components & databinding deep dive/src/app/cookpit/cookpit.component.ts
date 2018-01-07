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
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit({serverName:this.newServerName,
      serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    /*this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });*/
  }

}
