import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditPipe'
})
export class CreditPipePipe implements PipeTransform {

  transform(value: string): any {
    var text = value;
    var text1 = text.slice(0,4)
    var text2 = text.slice(4,8)
    var text3 = text.slice(8,12)
    var text4 = text.slice(12,16)
    var result = `${text1}-${text2}-${text3}-${text4}`
    return result
  }

}
