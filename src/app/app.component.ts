import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './core/services/app.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './features/home/home.component';
import { SingleProductComponent } from "./features/single-product/single-product.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, SingleProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EcommApp';

  appService: AppService = inject(AppService)

  constructor(){
    this.appService.getProducts().subscribe(data =>{
      // console.log(data);
      this.appService.products = data
    })

    this.appService.getCategories().subscribe(data =>{
      // console.log(data);
      this.appService.categories = data
    })
  }
}
