import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Todo } from '../shared/todo.module';
import tippy from 'tippy.js';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
@Input() todo:Todo=new Todo('')
@Output() todoclick:EventEmitter<void>=new EventEmitter()
@Output() editclick:EventEmitter<void>=new EventEmitter()
@Output() deleteclick:EventEmitter<void>=new EventEmitter()



  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{


  }
  onTodo(){
this.todoclick.emit()
  }
  onEdit(){
this.editclick.emit()
  }
  onDelete(){
this.deleteclick.emit()
  }

}
