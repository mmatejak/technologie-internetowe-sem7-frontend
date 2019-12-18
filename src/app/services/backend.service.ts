import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NotificationView} from '../models/notificationView.model';
import {NotificationDto} from '../models/notificationDto.model';
import {ServiceView} from '../models/serviceView.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) {
  }

  getAllNotifications(): Observable<NotificationView[]> {
    const httpHeaders = new HttpHeaders().append('Content-Type', 'application/json');
    return this.httpClient.get<NotificationView[]>('/api/notifications/all', {headers: httpHeaders});
  }

  addNewNotification(notificationDto: NotificationDto): Observable<any> {
    const httpHeaders = new HttpHeaders().append('Content-Type', 'application/json');
    return this.httpClient.post('/api/notifications/add', notificationDto, {headers: httpHeaders});
  }

  getAllServices(): Observable<ServiceView[]> {
    const httpHeaders = new HttpHeaders()
      .append('Content-Type', 'application/json');
    return this.httpClient.get<ServiceView[]>('/api/services/all', {headers: httpHeaders});
  }
}
