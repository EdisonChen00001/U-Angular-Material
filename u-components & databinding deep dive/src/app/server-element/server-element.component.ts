import { Component, OnInit, Input, ViewEncapsulation, OnChanges,SimpleChanges, DoCheck, AfterContentInit,AfterViewInit,AfterViewChecked} from '@angular/core';



@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // none, Native , Emulated is defult
})
export class ServerElementComponent implements OnInit, OnChanges,DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked{

  @Input('srvElement')
  element:{type:string, naem: string, content:string};
  @Input() name:string;

  constructor() { 
    console.log("constructor called!")
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called!")
  }

  ngOnInit() {
    console.log("ngOnInit called!")
  }

  ngDoCheck(){
    console.log("ngDoCheck called!")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit called")
  }
  
  ngAfterViewInit(){

  }
  ngAfterViewChecked(){

  }
}
