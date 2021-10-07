import { Component, OnInit } from '@angular/core';
import { ProductService } from '../appServices/product.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  
constructor(private _msgService:ProductService) { }
products:any = [];
ngOnInit(): void {
  this.post()
}

post(){
  this._msgService.product().subscribe(productData =>{
     this.products = productData
     console.log(this.products)
  })
}

}
