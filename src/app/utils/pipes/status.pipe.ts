import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'waiting':
        return 'Aguardando Validação';
      case 'valid':
        return 'Validado';
      case 'invalid':
        return 'Não Validado';
      default:
        return 'Aguardando Validação';
    }
  }
}
