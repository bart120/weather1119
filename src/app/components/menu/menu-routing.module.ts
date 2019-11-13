import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';

const routes: Routes = [
    {
        path: 'pages',
        component: MenuComponent,
        children: [
            {
                path: 'home',
                children: [
                    { path: '', loadChildren: () => import('../../pages/home/home.module').then(m => m.HomePageModule) }
                ]
            },
            {
                path: 'cities',
                children: [
                    { path: '', loadChildren: () => import('../../pages/cities/cities.module').then(x => x.CitiesPageModule) },
                    { path: 'add', loadChildren: () => import('../../pages/add-city/add-city.module').then(x => x.AddCityPageModule) }
                ]
            },
            {
                path: 'settings',
                children: [
                    { path: '', loadChildren: () => import('../../pages/settings/settings.module').then(x => x.SettingsPageModule) }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/pages/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuRoutingModule { }
