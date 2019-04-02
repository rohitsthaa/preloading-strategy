import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import {SelectivePreloadingStrategyService} from './selective-preloading-strategy.service'
import { CustomPreload } from './custom-preload.module';

const routes: Routes = [
  {
    path: 'email',
    loadChildren: './email/email.module#EmailModule',
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreload})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
