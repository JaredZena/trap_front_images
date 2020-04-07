import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Image } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  id: number;
  image: Image;

  message: string;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todoService.retrieveTodo('in28minutes', this.id)
    .subscribe(
      data => this.image = data
    );
  }

  saveTodo() {
    console.log('executing save todo method');
    this.todoService.updateTodo('in28minutes', this.id, this.image)
    .subscribe(
      response => {
        console.log(response);
        this.message = `Todo ${this.id} has been updated!`;
        console.log(`Todo ${this.id} has been updated`);
      }
    );
  }

}
