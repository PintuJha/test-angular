import { Component, OnInit } from '@angular/core';
import { ProductService } from '../appServices/product.service';


@Component({
  selector: 'app-photoalbums',
  templateUrl: './photoalbums.component.html',
  styleUrls: ['./photoalbums.component.less']
})
// export class PhotoalbumsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


export class PhotoalbumsComponent implements OnInit {
  constructor(private _msgService:ProductService) { }
  products:any = [];
  ngOnInit(): void {
    this.post()
  }
  
  post(){
    this._msgService.photo().subscribe(productData =>{
       this.products = productData
       console.log(this.products)
    })
  }
  
  }
