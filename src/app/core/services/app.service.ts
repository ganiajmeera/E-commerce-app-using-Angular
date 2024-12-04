import { Injectable, inject } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Product } from '../../shared/models/product';
@Injectable({providedIn: 'root'})
export class AppService {
    httpClient : HttpClient = inject (HttpClient)

    products: Product[] = [];
    categories: string[] = [];
    userName: string = "";
    searchQuery:string ="";
    
    cart: Product[]=[];
  totalAmount: number | undefined;
    getProducts(){
        return this.httpClient.get<Product[]>("/products.json")
    }

    getCategories(){
        return this.httpClient.get<string[]>("/categories.json")
    }
    incart(product:Product):boolean{
    //   return this.cart.includes(product)
   let productInCart = false
    this.cart.forEach((prod)=>{
        if(product.id == prod.id){
            productInCart = true;
        }
    })
    return productInCart
    }
    removeFromCart(product :Product){
        // this.cart.splice(this.cart.indexOf(product),1)
        let position = -1;
        this.cart.forEach((prod,index)=>{
            if(prod.id == product.id){
               position = index;
            }
        })
        this.cart.splice(position,1);

    }
}