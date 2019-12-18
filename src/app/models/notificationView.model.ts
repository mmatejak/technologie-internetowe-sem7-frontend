import {ServiceView} from './serviceView.model';
import {ClientView} from './clientView.model';

export interface NotificationView {
  id: number;
  deliveryTime: Date;
  description: string;
  client: ClientView;
  service: ServiceView;
}
