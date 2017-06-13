import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LoadModuleService } from './load-module.service';

const routes: Routes = [
    {
        path: '',
        loadChildren: './show-links/show-links.module#ShowLinksModule',
        canLoad: [LoadModuleService]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }