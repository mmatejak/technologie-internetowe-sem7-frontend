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
import {MainComponent} from './components/main/main.component';
import {ConfirmationService} from 'primeng/api';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './components/footer/footer.component';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MegaMenuModule} from 'primeng/megamenu';
import {CarouselModule} from 'primeng/carousel';
import {StoreModule} from '@ngrx/store';
import {reducer, SYSTEM_FEATURE_NAME} from './state/system.reducer';
import {EffectsModule} from '@ngrx/effects';
import {SystemEffects} from './state/system.effects';
import {HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

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
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(SYSTEM_FEATURE_NAME, reducer),
    EffectsModule.forFeature([SystemEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    BrowserModule,
    MenubarModule,
    ConfirmDialogModule,
    AppRoutingModule,
    CardModule,
    PanelModule,
    BrowserAnimationsModule,
    MegaMenuModule,
    CarouselModule,
    HttpClientModule,
    TableModule
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
