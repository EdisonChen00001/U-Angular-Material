import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  //selector: '[app-servers]',
  selector:'.app-servers',
  //selector:'app-servers',
  //template: '<app-server></app-server> session 2 chapter 19<app-server></app-server>',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreationStatus = "No Server was created"
  serverName = 'Testserver';

  constructor() {
    setTimeout(()=>{this.allowNewServer = true},2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "server was created";
  }
  onUpdateServerName(event:any){
    this.serverName = event.target.value;
  }
}
