import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

 
  transform(value: any, args?: any): any {
    if(!value || !args){
      return value;
    }
    return value.filter(item => item.employeeName.indexOf(args)!== -1)
  }

}
