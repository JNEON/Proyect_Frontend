import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (args === '' || args.length < 3) return value;
    const resultPosts = [];
    console.log(value);console.log(args);
    for( const grillas of value){;
      if(grillas.title.toLowerCase().indexOf(args.toLowerCase()) > -1){
        resultPosts.push(grillas);
      };
    };
    return resultPosts;console.log(resultPosts);
  }

}
