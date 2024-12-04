import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../core/services/app.service';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  appService: AppService = inject(AppService);
  product: Product | undefined
  constructor(){
    this.route.paramMap.subscribe(params => {
      console.log(params.get('productID'))
      this.appService.products.forEach(product => {
        if (""+product.id == params.get('productID'))
          this.product = product
        console.log(this.product)
      })
    })
        
  }
}
