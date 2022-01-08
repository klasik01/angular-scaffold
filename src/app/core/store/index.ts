import { AppStateFeatures } from '@app/app-state-features';
import { AppRouterState } from '@core/models/router-state';
import * as fromLanguageReducer from '@core/store/reducers/language.reducer';
import * as fromNavbarReducer from '@core/store/reducers/navbar.reducer';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface CoreState {
  router: fromRouter.RouterReducerState<AppRouterState>;
  language: fromLanguageReducer.State;
  navBarStatus: fromNavbarReducer.State;
}

export const getInitialCoreState: () => CoreState = () => ({
  router: {
    state: {
      feature: '',
      url: '',
      params: {},
      queryParams: {},
    },
    navigationId: 0,
  },
  language: fromLanguageReducer.getInitialState(),
  navBarStatus: fromNavbarReducer.getInitialState(),
});

export const reducers: ActionReducerMap<CoreState> = {
  router: fromRouter.routerReducer,
  language: fromLanguageReducer.reducer,
  navBarStatus: fromNavbarReducer.reducer,
};

const selectCoreState = createFeatureSelector<CoreState>(AppStateFeatures.Core);

/** ROUTER */

export const selectRouterParams = createSelector(selectCoreState, (state) => state.router && state.router.state.params);

/** LANGUAGE */

export const selectLanguage = createSelector(selectCoreState, (state) => state.language);

/** NAVBAR */

export const selectNavbar = createSelector(selectCoreState, (state) => state.navBarStatus);
