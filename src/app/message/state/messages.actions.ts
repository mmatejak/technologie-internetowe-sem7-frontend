import {createAction, props} from '@ngrx/store';
import {Message} from 'primeng/api';

export const ShowMessage = createAction(
  '[Messages] Show message',
  props<{ message: Message }>()
);
