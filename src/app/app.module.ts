import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactComponent} from './components/contact/contact.component';
import {NotificationComponent} from './components/notification/notification.component';
import {ServiceComponent} from './components/service/service.component';
import {MenubarModule} from 'primeng/menubar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesComponent} from './message/messages.component';
import {HeaderComponent} from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import {ConfirmationService} from 'primeng/api';
import {AppRoutingModule} from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MegaMenuModule} from 'primeng/megamenu';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    NotificationComponent,
    ServiceComponent,
    ContactComponent,
    MessagesComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        MenubarModule,
        ConfirmDialogModule,
        AppRoutingModule,
        CardModule,
        PanelModule,
        BrowserAnimationsModule,
        MegaMenuModule,
    ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
}
