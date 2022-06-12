import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iDtoBirth'
})
export class IDtoBirthPipe implements PipeTransform {
  transform(value: string): any {
    var text = value;
    var result = text.substring(1)
    var cutResult = result.substring(0,6)
    
    var spilt = cutResult.slice(0,2)
    if(parseInt(spilt) >= 23 ){
      var year = '19'+spilt
    }else{
      var year = '20'+spilt
    }
    console.log(year)
    var spilt2 = cutResult.slice(2,4)
    var month = spilt2
    
    var spilt3 = cutResult.slice(4,6)
    var day = spilt3

    var visibleDigits = day+'/'+month+'/'+year
    return visibleDigits
    
  }

}



