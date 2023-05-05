import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-productdetailed',
  templateUrl: './productdetailed.component.html',
  styleUrls: ['./productdetailed.component.css']
})
export class ProductdetailedComponent implements OnInit {

  productList:any="";  //variable
  searchFor:any="";
  finalProduct:any="";

  constructor(private service:ProductserviceService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.service.getProducts().subscribe(data=>{
      this.productList=data;  //copy product

      this.route.params.subscribe(paramdata=>{
         this.searchFor=paramdata['check'];

         for(let product of this.productList){
          if(product.model==this.searchFor){
            this.finalProduct=product;
            break;
          }
         }

      })
    })
  }

}

