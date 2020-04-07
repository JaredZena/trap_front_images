import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { Timestamp } from 'rxjs';

export interface Image {
  id: string,
  timestamp: any;
  trapId: any;
  lat: string;
  lon: string;
  imageStr: string;
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {

  images: Image[];

  message: string;

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshImages();
  }

  refreshImages(){
    console.log('Service has been called');
    this.todoService.retrieveAllImages().subscribe(
      (response: any) => {
        this.images = response.response.data.body.images;
        console.log(response.response.data.body.images);
      }
    );
  }

  seeImage(id){
    this.router.navigate(['images', id]);
  }

}
