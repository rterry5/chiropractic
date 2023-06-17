import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AutoAccidentsComponent } from './components/services/auto-accidents/auto-accidents.component';
import { BackPainReliefComponent } from './components/services/back-pain-relief/back-pain-relief.component';
import { SportsInjuriesComponent } from './components/services/sports-injuries/sports-injuries.component';
import { NeckPainReliefComponent } from './components/services/neck-pain-relief/neck-pain-relief.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/',
  },

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'services',
    component: ServicesComponent,
    children: [

    ]
  },
  {
    path: 'auto-accidents',
    component: AutoAccidentsComponent,
  },
  {
    path: 'back-pain-relief',
    component: BackPainReliefComponent,
  },
  {
    path: 'sports-injuries',
    component: SportsInjuriesComponent,
  },
  {
    path: 'neck-pain-relief',
    component: NeckPainReliefComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
