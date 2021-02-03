import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-donelist',
  templateUrl: './donelist.component.html',
  styleUrls: ['./donelist.component.scss']
})
export class DonelistComponent implements OnInit {

  @Input() donelist;
  @Output() deleteTaskEvent = new EventEmitter;
  @Output() undoDoneTaskEvent = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  deleteDoneTask(task){
    this.deleteTaskEvent.emit(task);
  }

  moveDoneTaskToTodoList(task){
    this.undoDoneTaskEvent.emit(task);
  }

}
