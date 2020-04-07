import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  imageData: Image;
  imageId: string;
  lat: string;
  lon: string;
  imageStr: string;
  trapId: string;

  message: string;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.imageId = this.route.snapshot.params['id'];
    this.todoService.seeImage('in28minutes', this.imageId)
    .subscribe(
      (response:any) => {
        console.log(response)
        this.imageData = response.response.data.body.data;
        this.trapId = this.imageData.trapId;
        this.lat = this.imageData.lat;
        this.lon = this.imageData.lon;
        this.imageStr = 'data:image/jpg;base64,' + response.response.data.body.data.image;
      }
    );
  }

}
