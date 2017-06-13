import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowHelpLinksComponent } from './show-help-links/show-help-links.component';

const routes: Routes = [
    {
        path: '',
        component: ShowHelpLinksComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowLinksRoutingModule { }