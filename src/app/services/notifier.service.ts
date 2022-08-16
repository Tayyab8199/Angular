import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackbar: MatSnackBar, private http: HttpClient) {}
  url = 'http://localhost:3000/tutorials'
//Getting data from API
  getAPIData():Observable<any>{
    return this.http.get(this.url)
  }
// Adding/Posting data in API
  postAPIData(data: any){
    return this.http.post(this.url, data)
  }
//Snack-bar notification (Toastr)
  showNotification(displayMessage: string, buttonText: string){
    this.snackbar.open(displayMessage, buttonText, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
   }
}
