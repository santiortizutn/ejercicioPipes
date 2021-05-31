import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let valor = value;
    if (valor.length >= args) {
      valor = valor.substr(0,args);
      return valor+'...';
    }
    return valor;
  }

}
