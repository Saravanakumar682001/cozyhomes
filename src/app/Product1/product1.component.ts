import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  productsList:any;

  constructor(private service:ProductserviceService) { }
  ngOnInit() {
    this.service.getProducts().subscribe(data=>{
      this.productsList=data;
    })
  }
}
