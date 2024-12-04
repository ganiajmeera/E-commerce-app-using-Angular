import { Component, inject } from '@angular/core';
import { AppService } from '../../../core/services/app.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  protected appService: AppService = inject(AppService)
  LogOut(){
    this.appService.userName="";
  }
}
