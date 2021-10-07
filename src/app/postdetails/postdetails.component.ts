import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../appServices/product.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.less']
})
export class PostdetailsComponent implements OnInit {
params:any;
postDetail:any;
  constructor(private route: ActivatedRoute,private _msgService:ProductService) { }

  ngOnInit(): void {
    this.params = this.route.snapshot.params.id
    this.postdetails();
  }

  postdetails(){
      this._msgService.productDetails(this.params).subscribe(postDetail =>{
         this.postDetail = postDetail;
         console.log(this.postDetail)
      })
  }

}
