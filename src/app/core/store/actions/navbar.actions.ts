import { createAction, props } from '@ngrx/store';

export const openNavbarByUi = createAction('[Core/Navbar/UI] Open Navbar by UI', props<{ sidebarOpened: boolean }>());
