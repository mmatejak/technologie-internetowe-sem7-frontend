import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotificationComponent} from './components/notification/notification.component';
import {ContactComponent} from './components/contact/contact.component';
import {ServiceComponent} from './components/service/service.component';
import {MainComponent} from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'services', component: ServiceComponent},
      {path: 'notifications', component: NotificationComponent},
      {path: 'contact', component: ContactComponent},
      {path: '', redirectTo: 'services', pathMatch: 'full'}
    ]
  },
  {
    path: '**',
    redirectTo: 'services',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
