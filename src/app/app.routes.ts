import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
];
