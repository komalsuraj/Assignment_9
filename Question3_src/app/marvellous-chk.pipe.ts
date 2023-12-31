import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param : string): string {
    let result = "";
    if(param == 'Prime') {
      let value2 =value/2;    
      for(let i=2; i<=value2; i++)    
      {    
        if(value%i == 0)    
        {        
           result = "Number is not prime"
        }
        else result = "Number is prime"
      }
    }
    if(param == 'Perfect') {
      let sum : any;
      for (let i = 1; i <= (value - 1); i++)
      {
          let rem = value % i;
        if (rem == 0)
          {
              sum = sum + i;
          }
        }
        if (sum == value)
             result = "It is perfect number";
        else
            result = "it is not perfect number";
    }
    if(param == 'Even') {
      if(value % 2 == 0) {
         result = "It is an Even Number";
      }
      else {
        result = "It is not An Even Number";
      }
    }
    if(param == 'Odd') {
      if(value % 2 != 0) {
         result = "It is Odd Number";
      }
      else {
         result = "It is not Odd Number";
      } 
    }
    return result;
  }

}
