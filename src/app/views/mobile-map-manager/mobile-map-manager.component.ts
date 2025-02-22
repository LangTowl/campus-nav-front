import {Component, inject} from '@angular/core';
import {UserVerificationService} from '../../services/verification/user-verification.service';

@Component({
  selector: 'app-mobile-map-manager',
  imports: [],
  templateUrl: './mobile-map-manager.component.html',
  styleUrl: './mobile-map-manager.component.scss'
})
export class MobileMapManagerComponent {
  private userVerificationService: UserVerificationService = inject(UserVerificationService);


  logout() {
    this.userVerificationService.logout();
  }
}
