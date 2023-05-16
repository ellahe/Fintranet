import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {

  filteredUsers$ = this.userService.filteredUsers$.pipe();

  constructor(private userService: UserService) {
  }

}
