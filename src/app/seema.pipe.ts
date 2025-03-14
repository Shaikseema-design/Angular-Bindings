import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seema'
})
export class SeemaPipe implements PipeTransform {

  transform(p:any,wish:string):string{
    if(p.gender=="f"){
      return `hello miss ${p.name},${wish}...`
    }
    else{
      return `hello mr ${p.name}, ${wish}...`
    }
  }

}
