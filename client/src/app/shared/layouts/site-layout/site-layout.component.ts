import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {

  links = [
    {url: '/departments', name: 'Цеха'},
    {url: '/users', name: 'Персонал'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
