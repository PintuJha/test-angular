import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}
  
   post='https://jsonplaceholder.typicode.com/posts';
   product(): Observable<any>{
   return this.http.get(this.post)
   
  }


  postdetails='https://jsonplaceholder.typicode.com/posts/:';
  productDetails(param:any): Observable<any>{
    return this.http.get(this.postdetails + `${param}`)
  }



  photoalbums='https://jsonplaceholder.typicode.com/photos';
  photo(): Observable<any>{
    return this.http.get(this.photoalbums)
  }

}
