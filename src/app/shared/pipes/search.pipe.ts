import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../models/product";

@Pipe({
    name:'search',
    standalone :true
})
export class SearchPipe implements PipeTransform{
    transform(products: Product[], searchQuery: string) :Product[]{
        return products.filter(product =>product.name.toLocaleLowerCase().includes(searchQuery.toLowerCase()))
    }
    
}