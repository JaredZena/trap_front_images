import { Injectable } from '@angular/core';
import { HelloWorldBean } from './welcome-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Image } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(
    private http: HttpClient
  ) { }


  retrieveAllImages() {
    return this.http.get<Response>(`https://us-central1-delta-smart-3efb4.cloudfunctions.net/microservice/images?page=1&limit=10`
    , this.options);
  }

  seeImage(username: string, id: string){
    return this.http.get<Response>(`https://us-central1-delta-smart-3efb4.cloudfunctions.net/microservice/images/${id}`, this.options);
  }

  deleteTodo(username: string, id: string){
    return this.http.delete<Image>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: string, id: number){
    return this.http.get<Image>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, image: Image){
    return this.http.put<Image>(`http://localhost:8080/users/${username}/todos/${id}`, image);
  }


}
