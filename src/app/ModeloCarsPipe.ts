import { Pipe, PipeTransform } from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
    name: 'ModeloCars'
})

export class ModeloCarsPipe implements PipeTransform{

    // Transform is the new "return function(value, args)" in Angular 1.x
    transform(value, args?) {
        // ES6 array destructuring
        return value.map(item => item.modelo)
        .filter((value, index, self) => self.indexOf(value) === index)
    }


}