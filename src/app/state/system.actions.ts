import {createAction, props} from '@ngrx/store';
import {NotificationDto} from '../models/notificationDto.model';
import {ServiceView} from '../models/serviceView.model';

export const loadAllServices = createAction('[Service] Load all available services');
export const setAllServices = createAction('[Service] Set all available services', props<{ services: ServiceView[] }>());
export const addNewNotification = createAction('[Notification] Add new notification', props<{ notificationDto: NotificationDto }>());
export const clearServices = createAction('[Service] Clear all services');
