import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  @Input() tasklist;
  @Output() doneTaskEvent = new EventEmitter;

  constructor() {
    console.log(this);
   }

  ngOnInit(): void {
  }

  moveTaskToDoneList(task){
      console.log(task);
      this.doneTaskEvent.emit(task);
  }

}
