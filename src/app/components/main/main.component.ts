import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';
import {loadAllServices} from '../../state/system.actions';
import {Store} from '@ngrx/store';
import {SystemFeatureState} from '../../state/system.reducer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  menuItems: MenuItem[];
  display: boolean;

  constructor(private readonly store$: Store<SystemFeatureState>) {
  }

  ngOnInit(): void {
    this.store$.dispatch(loadAllServices());
    this.display = true;
    this.menuItems = [
      {
        label: 'Dostępne Usługi',
        icon: 'pi pi-fw pi-folder nomargin',
        title: 'Wyświetl Dostępne Usługi',
        routerLink: '/services'
      },
      {
        label: 'Nowe Zgłoszenie',
        icon: 'pi pi-fw pi-users nomargin',
        title: 'Zapisz się do serwisu',
        routerLink: '/notifications'
      },
      {
        label: 'Kontakt',
        icon: 'pi pi-fw pi-folder nomargin',
        title: 'Zadzwoń Do Nas',
        routerLink: '/contact'
      }
    ];
  }
}
