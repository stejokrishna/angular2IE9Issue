import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowHelpLinksComponent } from './show-help-links/show-help-links.component';
import { ShowLinksRoutingModule } from './show-links.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShowLinksRoutingModule
  ],
  declarations: [ShowHelpLinksComponent],
  providers: []
})
export class ShowLinksModule { }
