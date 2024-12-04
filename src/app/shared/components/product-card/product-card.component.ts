import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Product } from '../../models/product';
import { ElipsisPipe } from "../../pipes/elipsis.pipe";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ElipsisPipe, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

    // @Input({required: true}) product: Product | undefined;
    @Input({required: true}) product!: Product
    @Input({required:true}) isLoggedIn :boolean = false;
    @Input({required:true}) inCart : boolean = false;

    @Output() addProductToCartEvent : EventEmitter<Product> = new EventEmitter()
    @Output()removeFromCartEvent:EventEmitter<Product> = new EventEmitter()

    addTocart(){
    this.addProductToCartEvent.emit(this.product)
    }
    removeFromCart(){
      this.removeFromCartEvent.emit(this.product)
    }
}
