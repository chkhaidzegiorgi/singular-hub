import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core';
import { UsersModule } from './users';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserModule } from './user';
import { RepositoryModule } from './repository/repository.module';
import { ProgressInterceptor } from './core/interceptors/progress.interceptor';
import { SharedModule } from './shared';


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
    SharedModule,

    CoreModule,
    UsersModule,
    UserModule,
    RepositoryModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ProgressInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
