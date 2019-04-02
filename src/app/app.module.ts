import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { CustomPreload } from './custom-preload.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    CustomPreload
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
