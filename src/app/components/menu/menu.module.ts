import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
    declarations: [MenuComponent],
    imports: [
        IonicModule,
        CommonModule,
        MenuRoutingModule
    ]
})
export class MenuModule { }
