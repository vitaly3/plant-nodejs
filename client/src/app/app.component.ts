import { Component, OnInit } from '@angular/core';
import { UserService} from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.userService.getUsers().subscribe(
    //   (user) => console.log(user)
    // )
    
  }
}
