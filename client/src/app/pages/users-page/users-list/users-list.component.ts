import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/shared/services/user.service';
import { Params } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[]
  testUsers = []
  loading = false
  links = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const user = {
      ID: 0,
      NAME: 'Home'
    }
    this.onClickUser(user);
  }

  compare(a, b) {
    if (a.TYPE < b.TYPE){
      return -1;
    }
    if (a.TYPE > b.TYPE){
      return 1;
    }
    return 0;
  }

  onClickLink(link) {
    this.loading = true
    const params: Params = {
      PARENT_ID: link.id,
      STATUS: 'AVAILABLE'
    }
    // this.links.push({name: user.NAME, id: user.ID})
    this.userService.getPersonListById(params).subscribe(
      (users) => {
        this.users = users.sort(this.compare)
      },
      (error) => {
        console.log(error)
      },
      () => {
        this.loading = false
      }
    )
  }

  onClickUser(user) {
    this.loading = true
    const params: Params = {
      PARENT_ID: user.ID,
      STATUS: 'AVAILABLE'
    }
    this.links.push({name: user.NAME, id: user.ID})
    console.log(this.links)
    this.userService.getPersonListById(params).subscribe(
      (users) => {
        this.users = users.sort(this.compare)
        this.testUsers[user.ID] = users.sort(this.compare)
      },
      (error) => {
        console.log(error)
      },
      () => {
        this.loading = false
        console.log(this.testUsers)
      }
    )
  }

}
