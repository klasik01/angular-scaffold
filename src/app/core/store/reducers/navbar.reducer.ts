import { Action, createReducer, on } from '@ngrx/store';
import * as NavbarActions from '../actions/navbar.actions';

export interface State {
  sidebarOpened: boolean;
}

export const getInitialState: () => State = () => ({
  sidebarOpened: false,
});

const navbarReducer = createReducer(
  getInitialState(),
  on(NavbarActions.openNavbarByUi, (state, action) => ({
    ...state,
    sidebarOpened: action.sidebarOpened,
  }))
);

export function reducer(state: State | undefined, action: Action): State {
  return navbarReducer(state, action);
}
