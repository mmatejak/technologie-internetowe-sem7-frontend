import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  menuItems: MenuItem[];
  display: boolean;

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
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

  redirectToMainPage(): void {
    this.router.navigate(['/']);
  }
}
