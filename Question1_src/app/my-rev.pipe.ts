import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {
    let temp : string = "";
    for (let char of value) {

      // append every character of string to the start of the reverseString
      temp = char + temp;
   }
    return temp; 
  }

}
