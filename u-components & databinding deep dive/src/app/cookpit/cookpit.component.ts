import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { } from 'events';
import { } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css']
})
export class CookpitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  //newServerName = '';
  //newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;


  onAddServer(nameInput: HTMLInputElement) {

    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}