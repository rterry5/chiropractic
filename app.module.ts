import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './components/banner/banner.component';
import { ContentComponent } from './components/home/content/content.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { IntroSectionComponent } from './components/home/intro-section/intro-section.component';
import { AutoAccidentsComponent } from './components/services/auto-accidents/auto-accidents.component';
import { BackPainReliefComponent } from './components/services/back-pain-relief/back-pain-relief.component';
import { SportsInjuriesComponent } from './components/services/sports-injuries/sports-injuries.component';
import { NeckPainReliefComponent } from './components/services/neck-pain-relief/neck-pain-relief.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    ContentComponent,
    ContentCardComponent,
    AboutComponent,
    ContactComponent,
    IntroSectionComponent,
    AutoAccidentsComponent,
    BackPainReliefComponent,
    SportsInjuriesComponent,
    NeckPainReliefComponent,
    ServicesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
