import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LinkComponent } from './link/link.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { PayComponent } from './pay/pay.component';
import { NotipayComponent } from './notipay/notipay.component';
import { PickDayComponent } from './pick-day/pick-day.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinkComponent,
    LoginComponent,
    TestComponent,
    PayComponent,
    NotipayComponent,
    PickDayComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
