import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appendUSD' })

export class CustomPipe implements PipeTransform {
  transform(amount: string) {
    return amount + ' USD';
  }
}