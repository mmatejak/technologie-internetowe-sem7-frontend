import {Component, OnInit} from '@angular/core';
import {ServiceView} from '../../models/serviceView.model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {SystemFeatureState} from '../../state/system.reducer';
import {getAllServices} from '../../state/system.selector';
import {filterNotNil} from '../../sharedkernel/rxjs/rxjs';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  services$: Observable<ServiceView[]>;

  constructor(private readonly store$: Store<SystemFeatureState>) {
  }

  ngOnInit() {
    this.services$ = this.store$.select(getAllServices).pipe(filterNotNil);
  }
}
