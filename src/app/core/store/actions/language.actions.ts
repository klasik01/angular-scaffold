import { createAction, props } from '@ngrx/store';
import { Selectedlang } from '@shared/const/global/app.constants';

export const changeLanguageByUi = createAction(
  '[Core/Language/UI] Change language by UI',
  props<{ language: Selectedlang }>()
);
