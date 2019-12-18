import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {pluck, tap} from 'rxjs/operators';
import {MessageService} from 'primeng/api';
import {ShowMessage} from './messages.actions';

@Injectable()
export class MessagesEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly messageService: MessageService) {
  }

  @Effect({dispatch: false})
  loadCustomers() {
    return this.actions$.pipe(
      ofType(ShowMessage),
      pluck('message'),
      tap(message => this.messageService.add(message))
    );
  }
}
