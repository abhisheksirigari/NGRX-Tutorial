import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AppState} from './app.store';
import { withLatestFrom, exhaustMap, filter, map } from 'rxjs/operators';
import { getAllServicesLoaded } from './reducers/tutorial.reducer';
import { LoadServicesRequested, LoadServices, LOADSERVICESREQUESTED } from './actions/tutorial.actions';
import { AppSettingsService } from './services/app-settings.service';

@Injectable()
export class AppEffects {
  @Effect()
  loadServicesRequested$ = this.actions$.pipe(
    ofType<LoadServicesRequested>(LOADSERVICESREQUESTED),
    withLatestFrom(this.store.select(getAllServicesLoaded)),
    filter(([_, loaded]) => !loaded),
    exhaustMap(() => this.appSettingsService.getServices().pipe(
      map(result => 
        new LoadServices( result ))
    ))
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private appSettingsService: AppSettingsService
  ) {}
}

