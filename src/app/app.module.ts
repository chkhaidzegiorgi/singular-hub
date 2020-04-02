import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core';
import { UsersModule } from './users';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserModule } from './user';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,

    CoreModule,
    UsersModule,
    UserModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
