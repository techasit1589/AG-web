import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LinkComponent } from './link/link.component';
import { LoginComponent } from './login/login.component';
import { NotipayComponent } from './notipay/notipay.component';
import { PayComponent } from './pay/pay.component';
import { PickDayComponent } from './pick-day/pick-day.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'link', component: LinkComponent},
  { path: 'login', component: LoginComponent},
  { path: 'test', component: TestComponent},
  { path: 'notipay', component: NotipayComponent},
  { path: 'pay', component: PayComponent},
  { path: 'pickday', component: PickDayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
