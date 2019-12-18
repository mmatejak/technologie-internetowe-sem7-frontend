import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {ShowMessage} from '../../message/state/messages.actions';
import {genericError} from '../../message/messages.model';

export function catchGenericError() {
  return catchError(err => {
    console.error(err);
    return of(ShowMessage({message: genericError()}));
  });
}
