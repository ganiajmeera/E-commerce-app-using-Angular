import { Component, inject } from '@angular/core';
import { AppService } from '../../core/services/app.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { SearchPipe } from "../../shared/pipes/search.pipe";
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    appService : AppService = inject(AppService)

    ngOnDestroy(){
      this.appService.searchQuery = "";
    }
    get isLoggedIn(){
      return this.appService.userName?true:false;
    }

    addTocart(product:Product){
this.appService.cart.push(product)
    }
    removeFromCart(product:Product){
      this.appService.removeFromCart(product)
    }
}
