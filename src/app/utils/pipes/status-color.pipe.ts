import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor',
})
export class StatusColorPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'waiting':
        return 'orange';
      case 'valid':
        return 'green';
      case 'invalid':
        return 'red';
      default:
        return 'orange';
    }
  }
}
