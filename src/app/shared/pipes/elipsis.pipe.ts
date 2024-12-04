import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'elipsis',
    standalone: true
})

export class ElipsisPipe implements PipeTransform {
    transform(value: string, numberOfCharacters: number = 20): string {
        return value.substring(0, numberOfCharacters)+ "..."
    }
}