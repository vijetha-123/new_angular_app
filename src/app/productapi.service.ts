import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductapiService {

  constructor(private http:HttpClient) { }

  postProducts(data:any){
    return this.http.post<any>("https://heroku-f-json-server-fakedb.herokuapp.com/posts",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  getProductdetails(){
    return this.http.get<any>("https://heroku-f-json-server-fakedb.herokuapp.com/posts").pipe(map((res:any)=>{
      return res;
    }))
  }
  updateProduct(data:any,id:number){
    return this.http.put<any>("https://heroku-f-json-server-fakedb.herokuapp.com/posts/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteProduct(id:number){
    return this.http.delete<any>("https://heroku-f-json-server-fakedb.herokuapp.com/posts/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
