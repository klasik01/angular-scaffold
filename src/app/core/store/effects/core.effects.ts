import { Injectable } from '@angular/core';
import { applicationInit } from '@core/store/actions/core.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CustomIconsRegistryService } from '@shared/services/custom-icons-registry/custom-icons-registry.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class CoreEffects {
  registerIconsOnInit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(applicationInit),
        tap(() => this.iconService.register())
      ),
    { dispatch: false }
  );

  constructor(private readonly actions$: Actions, private readonly iconService: CustomIconsRegistryService) {}
}
