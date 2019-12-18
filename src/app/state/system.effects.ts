import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {addNewNotification, loadAllServices, setAllServices} from './system.actions';
import {BackendService} from '../services/backend.service';
import {ShowMessage} from '../message/state/messages.actions';
import {successMessage} from '../message/messages.model';
import {catchGenericError} from '../sharedkernel/rxjs/operator';
import {concatMap, map} from 'rxjs/operators';

@Injectable()
export class SystemEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly backendService: BackendService) {
  }

  @Effect()
  loadAllServices() {
    return this.actions$.pipe(
      ofType(loadAllServices),
      concatMap(command =>
        this.backendService.getAllServices().pipe(
          map(services => setAllServices({services}))
        )
      )
    );
  }

  @Effect()
  addNewNotification() {
    const showSuccessMessage = () => ShowMessage({message: successMessage('Pomyślnie dodano nowe zgłoszenie')});

    return this.actions$.pipe(
      ofType(addNewNotification),
      concatMap(command =>
        this.backendService.addNewNotification(command.notificationDto).pipe(
          concatMap(() => [showSuccessMessage()]), catchGenericError()
        )
      )
    );
  }
}
