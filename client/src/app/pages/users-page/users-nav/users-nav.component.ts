import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-nav',
  templateUrl: './users-nav.component.html',
  styleUrls: ['./users-nav.component.css']
})
export class UsersNavComponent implements OnInit {

  links = [
    { url: '/users', title: 'Сотрудники'},
    { url: '/users/log', title: 'История проходов'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
