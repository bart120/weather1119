import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'hour'
})
export class HourPipe implements PipeTransform {

    transform(value: any, ...args: any[]) {
        const dt = new Date(value * 1000);
        return `${dt.getHours()} : ${dt.getMinutes()}`;

    }
}
