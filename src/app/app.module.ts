import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPasswordCodeComponent } from './forgot-password-code/forgot-password-code.component';
import { ForgotpasswordNewPasswordComponent } from './forgotpassword-new-password/forgotpassword-new-password.component';
import { ProductionsComponent } from './productions/productions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'forgotpasswordcode', component: ForgotPasswordCodeComponent},
  {path: 'forgotpasswordNewPassword', component: ForgotpasswordNewPasswordComponent},
  {path: 'productions', component: ProductionsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    ForgotPasswordCodeComponent,
    ForgotpasswordNewPasswordComponent,
    ProductionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
