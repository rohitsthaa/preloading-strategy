import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { EmailListComponent } from '../email-list/email-list.component';
import { EmailDetailComponent } from '../email-detail/email-detail.component';

@NgModule({
  imports: [
    CommonModule,
    EmailRoutingModule
  ],
  declarations: [
    EmailListComponent,
    EmailDetailComponent
  ]
})
export class EmailModule { }
