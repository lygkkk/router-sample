import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { HeroListComponent } from './hero-list/hero-list.component';
@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNoFoundComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
