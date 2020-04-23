import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../shared/interfaces'

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  users: User[]
  loading = false
  link = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loading = true
    this.userService.getUsers().subscribe(
      (users) => {
        // this.users = users.filter( (u) => u.TYPE === 'EMP' && u.STATUS === 'AVAILABLE')
        this.users = users.filter( (u) => u.PARENT_ID === 0)
        console.log(users[0])
      },
      (error) => {
        console.log(error)
      },
      () => {
        this.loading = false
      }
    )
  }

  onClickUser(userId) {
    this.loading = true
    this.userService.getUsers().subscribe(
      (users) => {
        // this.users = users.filter( (u) => u.TYPE === 'EMP' && u.STATUS === 'AVAILABLE')
        this.users = users.filter( (u) => u.PARENT_ID === userId)
        console.log(this.users)
      },
      (error) => {
        console.log(error)
      },
      () => {
        this.loading = false
      }
    )
  }

}
