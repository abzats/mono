import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CookieModule } from "ngx-cookie";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MenuComponent } from './components/core/menu/menu.component';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { AboutComponent } from './components/about/about.component';
import { LanguageMenuComponent } from './components/core/menu/language-menu/language-menu.component';
import { AboutCardComponent } from './components/about/about-card/about-card.component';
import { CvCardComponent } from './components/about/cv-card/cv-card.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { ContactComponent } from './components/about/contact/contact.component';
import { ContactFormComponent } from './components/about/contact/contact-form/contact-form.component';

import { AppGlobals } from "./app.globals";
import { appRoutes } from "./app.routes";

import { TransPipe } from './pipes/trans.pipe';
import { Nl2brPipe } from './pipes/nl2br.pipe';

import { LanguageService } from "./services/language.service";
import { AuthService } from "./components/auth/auth.service";
import { BannersService } from "./services/banners.service";
import { ContactService } from "./components/about/contact/contact-form/contact.service";
import { ReviewsComponent } from './components/about/reviews/reviews.component';
import { HttpService } from "./services/http.service";
import { ReviewDetailsComponent } from './components/about/reviews/review-details/review-details.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    TransPipe,
    LanguageMenuComponent,
    Nl2brPipe,
    AboutCardComponent,
    CvCardComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    LogoutComponent,
    ContactComponent,
    ContactFormComponent,
    ReviewsComponent,
    ReviewDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    CookieModule.forRoot()
  ],
  providers: [
    AppGlobals,
    LanguageService,
    AuthService,
    BannersService,
    ContactService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const routes = appRoutes;
