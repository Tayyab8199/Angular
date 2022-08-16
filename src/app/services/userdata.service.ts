import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private messageSource = new Subject<String>();
  message$ = this.messageSource.asObservable();
  //Calling API using services
  constructor(private http:HttpClient){ }

  //Calling Mockoon API (GET)
  getAPIData(){
    return this.http.get('http://localhost:3000/tutorials')
  }

  //Calling Mockoon API (POST)
  postAPIData(inputdata:any){
    return this.http.post('http://localhost:3000/tutorials', inputdata)
  }
  //Calling API by Code
  getByCode(id:any){
    return this.http.get('http://localhost:3000/tutorials'+'/'+id)
  }
  //Calling API (Delete)
  deleteAPIData(id:any){
    return this.http.delete('${http://localhost:3000/tutorials}/${id}')
  }

  sendmessage(message: string){
    this.messageSource.next(message);
  }
  users = [
      {name: 'Peter', age:29, email:'peter@test.com'},
      {name: 'Tayyab', age:29, email:'tayyab@test.com'},
      {name: 'Tariq', age:29, email:'tariq@test.com'},
    ];
  //Resolver on About component
  getAllUsers(){
    const userList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users)
      }, 2000)
    });
    return userList;
  }
}
