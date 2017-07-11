import { Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { AboutComponent } from './components/about/about.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: {
        'en': 'Home',
        'ru': 'Домой'
      },
      id: 'home'
    }
  },
  {
    path: 'auth',
    component: AuthComponent,
    data: {
      title: {
        'en': 'Login',
        'ru': 'Вход'
      },
      id: 'auth'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: {
        'en': 'About',
        'ru': 'Обо мне'
      },
      id: 'about'
    },
  },
];
