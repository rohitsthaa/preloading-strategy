import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailListComponent } from '../email-list/email-list.component';
import { EmailDetailComponent } from '../email-detail/email-detail.component';

const routes: Routes = [
  { path: '', component: EmailListComponent},
{ path: 'detail', component: EmailDetailComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
