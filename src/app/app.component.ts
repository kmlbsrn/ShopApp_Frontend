import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { User } from './User/User';
import { HttpClient } from '@angular/common/http';
import { UserDetail } from './User/UserDetail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CRM';
}
