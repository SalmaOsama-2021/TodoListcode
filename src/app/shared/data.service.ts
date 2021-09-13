import { Injectable } from '@angular/core';
import { Todo } from './todo.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public todos:Todo[]=[
    new Todo('this is a test',false),
    new Todo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident doloribus sequi, earum odio eum aliquid pariatur veritatis! Omnis cumque sit suscipit qui consequuntur eligendi rem aperiam similique, numquam sunt nesciunt?',true)

  ]
  constructor() { }
  getalltodo(){
    return this.todos
  }
  addtodos(todo:Todo){
    this.todos.push(todo)
  }
  updateTodos(index:number,updateTodos:Todo){
    this.todos[index]=updateTodos
  }
  deletaTodo(index:number){
    this.todos.splice(index,1);
  }
}
