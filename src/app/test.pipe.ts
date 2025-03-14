import { Pipe, PipeTransform } from '@angular/core';
// this @pipe decorator implement the test as a pipe
@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {
  transform(value:string):string{
    return value.split('').reverse().join('');
  }

  

}
