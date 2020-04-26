import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgWorkboxComponentsModule } from '@kasaharu/ng-workbox/components';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgWorkboxComponentsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
