import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn:'root'
})
export class ProductserviceService {

  constructor(private client:HttpClient) {}
  
  getProducts(){
    return this.client.get("http://localhost:3000/products")
  }
  
  }
  
