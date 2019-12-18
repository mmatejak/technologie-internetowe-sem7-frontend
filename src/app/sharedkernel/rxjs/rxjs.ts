import {filter, first, tap} from 'rxjs/operators';
import * as _ from 'lodash';

const notNil = _.negate(_.isNil);

export const filterNotNil = filter(notNil);
export const firstNotNil = first(notNil);
export const consoleError = tap(console.error);
