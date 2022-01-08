import { Injectable } from '@angular/core';
import { applicationInit } from '@core/store/actions/core.actions';
import { changeLanguageByUi } from '@core/store/actions/language.actions';
import { getInitialState as languageInitialState } from '@core/store/reducers/language.reducer';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class TranslateEffects {
  setLanguageOnInit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(applicationInit),
        tap(() => {
          this.translate.setDefaultLang(this.defaultLanguage);
          this.translate.use(this.defaultLanguage);
        })
      ),
    { dispatch: false }
  );

  changeLanguageByUi$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(changeLanguageByUi),
        tap((action) => this.translate.use(action.language))
      ),
    { dispatch: false }
  );

  private readonly defaultLanguage = languageInitialState();

  constructor(private readonly actions$: Actions, private readonly translate: TranslateService) {}
}
