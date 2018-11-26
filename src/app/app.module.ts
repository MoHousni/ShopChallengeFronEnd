import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { SingupComponent } from './singup/singup.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { XhrInterceptor } from './services/login/auth/XhrInterceptor';
import { LoginService } from './services/login/login.service';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { SingupService } from './services/singup/singup.service';
import { HomeService } from './services/home/home.service';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SingupComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService, , { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }, CookieService, HomeService,
    SingupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


