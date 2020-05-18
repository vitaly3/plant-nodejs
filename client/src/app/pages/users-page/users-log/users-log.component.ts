import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { UserLog, Filter } from 'src/app/shared/interfaces'

const STEP = 5
@Component({
  selector: 'app-users-log',
  templateUrl: './users-log.component.html',
  styleUrls: ['./users-log.component.css']
})
export class UsersLogComponent implements OnInit {

  loading = false
  reloading = false
  users: UserLog[] = []
  offset = 0
  limit = STEP
  filter: Filter = {}

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.reloading = true
    this.fetch()
  }

  fetch() {
    const params = Object.assign({}, this.filter, {
      offset: this.offset,
      limit: this.limit
    })
    this.loading = true
    this.userService.getLogUsers(params).subscribe(
      (users) => {
        this.users = this.users.concat(users)
      },
      (error) => {
        console.log(error)
      },
      () => {
        this.loading = false
        this.reloading = false
      }
    )
  }

  loadMore() {
    this.loading = true
    this.offset += STEP
    this.fetch()
  }

}
