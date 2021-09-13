import { templateJitUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.module';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {


showval:boolean=false;

 todos:Todo[]=[
  new Todo('this is a test',false),
  new Todo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloribus sequi, earum odio eum aliquid pariatur veritatis! Omnis cumque sit suscipit qui consequuntur eligendi rem aperiam similique, numquam sunt nesciunt?',true)
 ]
 
  constructor(private dataservice:DataService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.todos=this.dataservice.getalltodo()
  }
  onFormSubmit(form:NgForm){
 
 
   this.dataservice.addtodos(new Todo(form.value.text))
  form.reset()
  
  if(form.invalid) return this.showval=true
  else  return this.showval=false
  }
setcomplete(todo:Todo){
todo.completed=!todo.completed
  }
  editcomplete(todo:Todo){
    const index=this.todos.indexOf(todo)
    let dialogRef =this.dialog.open(EditTodoDialogComponent, {
      width: '700px',
      data:todo
    });

  dialogRef.afterClosed().subscribe((result)=>{
    if(result){
      this.dataservice.updateTodos(index,result)
    }
  }
  );
  }
  deletecomplete(todo:Todo){
    const index=this.todos.indexOf(todo);
this.dataservice.deletaTodo(index)
  }
}
