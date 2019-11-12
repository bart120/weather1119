import { NgModule } from '@angular/core';
import { HourPipe } from './hour.pipe';

@NgModule({
    declarations: [HourPipe],
    exports: [HourPipe]
})
export class PipesModule { }
