import { Component, OnInit } from '@angular/core';
import { CncService } from 'src/app/shared/services/cnc.service';
import { Cnc, Department } from '../../shared/interfaces'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-departments-page',
  templateUrl: './departments-page.component.html',
  styleUrls: ['./departments-page.component.css']
})
export class DepartmentsPageComponent implements OnInit {

  cncs$: Observable<Cnc[]>
  cncDepartments$: Observable<Department[]>
  constructor(private cncService: CncService) { }

  ngOnInit(): void {
    this.cncDepartments$ = this.cncService.fetchDepartments()
  }

}
