import { Component, inject } from '@angular/core';
import { AppService } from '../../../core/services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  appService : AppService = inject(AppService)
  router: Router = inject(Router)
  login(userName:string){
    this.appService.userName=userName;
    this.router.navigate(['/'])

  }
}
