import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../../core/services/app.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  totals: number =0 ; cartForm!: FormGroup;
   constructor(private router: Router, private fb: FormBuilder, private appService: AppService) {
    
    } 
   
   ngOnInit() { this.cartForm = this.fb.group({ products: this.fb.array([])

    });
    this.addProducts();
     let start = <FormArray>this.cartForm.controls['products'];

     start.controls.forEach((control) => {
       console.log(control.value.price + ' ' + control.value.quantity )
        this.totals = this.totals + (control.value.price * control.value.quantity ); 
        console.log(this.totals); 
      });
        this.cartForm.valueChanges.subscribe((data) => { 
          console.log(data); let total = 0; let all = <FormArray>this.cartForm.controls['products']; 

          all.controls.forEach((control) => {
           console.log(control.value.price + ' ' + control.value.quantity ) 
           total = total + (control.value.price * control.value.quantity ); 
           console.log(this.totals);
           }); this.totals = total;
          }) 
        }
            addProducts() { 
              if (this.appService.cart.length > 0 ) { 
                this.appService.cart.forEach((product: { 
                  id: any; name: any; price: any; img: any; description: any;
                 }) => { 
                  let p = this.fb.group({ 
                    id: product.id, name: product.name, price: product.price, 
                    img: product.img, description: product.description, quantity: 1 }
                  );
            (this.cartForm.controls['products'] as FormArray).push(p); });
             console.log(this.cartForm); 
            } 
          } 
          removeProduct(i: number) {
             (this.cartForm.controls['products'] as FormArray).removeAt(i); this.appService.cart.splice(i, 1);
             } 
            get products () { 
              return <FormArray>this.cartForm.get('products'); 
            } 
            checkOut() { 
              this.appService.totalAmount = this.totals; this.router.navigate(['/checkout']);
             }
}
