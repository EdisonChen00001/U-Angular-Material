import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css']
})
export class CookpitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  newServerName = '';
  newServerContent = '';
  onAddServer() {
    /*this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });*/
  }

  onAddBlueprint() {
    /*this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });*/
  }

}