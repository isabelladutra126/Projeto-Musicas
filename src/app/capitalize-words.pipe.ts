import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeWords'
})
export class CapitalizeWordsPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    // Divide a string em palavras, capitaliza a primeira letra e deixa o resto da palavra em minúsculas
    return value.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
  }

}