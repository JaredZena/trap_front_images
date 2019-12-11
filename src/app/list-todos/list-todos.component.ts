import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {

  // todos = [
  //   new Todo(1,'Learn to dance',false,new Date()),
  //   new Todo(2,'Become an expert to Angular',false,new Date()),
  //   new Todo(3,'Visit South Korea',false,new Date()),
  //   new Todo(4,'Configure punto de venta',false,new Date()),
  //   new Todo(5,'Buy Xiaomi camera',false,new Date())
  // ]

  todos: Todo[];

  constructor(
    private todoService: TodoDataService
  ) { }

  ngOnInit() {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

}
