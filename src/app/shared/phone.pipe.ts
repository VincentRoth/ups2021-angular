import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(value: string, char: string = ' '): unknown {
    return value?.replace?.(/\./g, char);
  }
}
