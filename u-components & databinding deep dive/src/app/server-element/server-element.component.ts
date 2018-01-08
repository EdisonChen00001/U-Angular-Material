import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // none, Native , Emulated is defult
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement')
  element:{type:string, naem: string, content:string};
  constructor() { }

  ngOnInit() {
  }

}
