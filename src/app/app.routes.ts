import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "", loadComponent: ( ) => import("./features/home/home.component").then(m => m.HomeComponent) },
    { path: "product/:productID", loadComponent: ( ) => import("./features/single-product/single-product.component").then(m => m.SingleProductComponent) },
    { path: "login", loadComponent: ( ) => import("./features/components/login/login.component").then(m => m.LoginComponent) },
    { path: "category/:catId", loadComponent: ( ) => import("./features/components/category-products/category-products.component").then(m => m.CategoryProductsComponent)} ,  
    { path: "cart", loadComponent: ( ) => import("./features/components/cart/cart.component").then(m => m.CartComponent) },
];
