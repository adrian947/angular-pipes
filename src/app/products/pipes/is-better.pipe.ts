import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isBetter',
})
export class IsBetterPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === 'Electronics') {
      return value + ' ' +  '(is Better)';
    }

    return value;
  }
}
