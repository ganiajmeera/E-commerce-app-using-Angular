import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { Product } from '../../../shared/models/product';
import { AppService } from '../../../core/services/app.service';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core';
import { SearchPipe } from "../../../shared/pipes/search.pipe";
@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [ProductCardComponent, SearchPipe],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {

  cProducts:Product[]=[];
  appService:AppService = inject (AppService);
  route:ActivatedRoute = inject(ActivatedRoute);


  constructor(){
    this.route.paramMap.subscribe(params=>{
      console.log(params.get('catId'));
      this.cProducts=[];
      this.appService.searchQuery = '';
        this.appService.products.forEach((product:Product)=>{
          if(product.category == params.get("catId")){
            this.cProducts.push(product);
          }
        })
    })
  }
  ngOnDestroy(){
    this.appService.searchQuery = "";
  }
  get isLoggedIn(){
    return this.appService.userName?true:false;
  }
}


