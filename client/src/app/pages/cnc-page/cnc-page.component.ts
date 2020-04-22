import { Component, OnInit, Input } from '@angular/core';
import { CncService } from 'src/app/shared/services/cnc.service';
import { Cnc, Department } from '../../shared/interfaces'
import { Observable, of} from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cnc-page',
  templateUrl: './cnc-page.component.html',
  styleUrls: ['./cnc-page.component.css']
})
export class CncPageComponent implements OnInit {

  constructor(private cncService: CncService,
              private route: ActivatedRoute) { }

  departmentCncs: Cnc[]
  ngOnInit(): void {
    // this.cncs$ = this.cncService.fetch()
    // this.cncDepartments$ = this.cncService.fetchDepartments()
    this.route.params.pipe(
      switchMap(
        (params: Params) => {
          if (params['id']) {
            return this.cncService.getCncByDepartmentId(params['id'])
          }
          return of(null)
        }
      )
    ).subscribe(
      (cncs: Cnc[]) => {
        this.departmentCncs = cncs
      }
    )
  }

}
