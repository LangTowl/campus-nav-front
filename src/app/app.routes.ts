import { Routes } from '@angular/router';

import { getPlatform } from './services/breakpoint/breakpoint.util';
import { DesktopManagerComponent} from './views/desktop-manager/desktop-manager.component';
import { MobileManagerComponent } from './views/mobile-manager/mobile-manager.component';
import {MobileMapManagerComponent} from './views/mobile-map-manager/mobile-map-manager.component';
import {authGuard} from './guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: getPlatform() === 'mobile' ? MobileManagerComponent : DesktopManagerComponent,
  },
  {
    path: 'map',
    component: getPlatform() === 'mobile' ? MobileMapManagerComponent : MobileMapManagerComponent,
    canActivate: [authGuard]
  }
];
