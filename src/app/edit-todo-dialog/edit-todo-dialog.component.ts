import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_SCROLL_STRATEGY_FACTORY } from '@angular/material/dialog';
import { Todo } from '../shared/todo.module';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent implements OnInit {

  constructor(public dialogref: MatDialogRef <EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA)public todo:Todo) {
     
     }

  ngOnInit(): void {
  }
  close(){
    this.dialogref.close()
  }
  onFormSubmit(form: NgForm){
    if(form.invalid)return
    const updateTodos={
      ...this.todo,
      ...form.value
    }
    this.dialogref.close(updateTodos)

  }
}
