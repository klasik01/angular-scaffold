import { changeLanguageByUi } from '@core/store/actions/language.actions';
import { Action, createReducer } from '@ngrx/store';
import { Selectedlang } from '@shared/const/global/app.constants';
import { produceOn } from '@shared/utils/shared-utils';

export type State = string;

export const getInitialState: () => State = () => Selectedlang.Czech;

const languageReducer = createReducer(
  getInitialState(),
  produceOn(changeLanguageByUi, (state, action) => action.language)
);

export function reducer(state: State | undefined, action: Action): State {
  return languageReducer(state, action);
}
