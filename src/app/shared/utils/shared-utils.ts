/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionCreator, ActionType, on } from '@ngrx/store';
import { FunctionWithParametersType } from '@ngrx/store/src/models';
import { ReducerTypes } from '@ngrx/store/src/reducer_creator';
import produce, { Draft } from 'immer';

export class SharedUtils {
  static camelToKebabCase(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function produceOn<Type extends string, C extends FunctionWithParametersType<any, {}>, State>(
  actionType: ActionCreator<Type, C>,
  callback: (draft: Draft<State>, action: ActionType<ActionCreator<Type, C>>) => any
): ReducerTypes<any, [ActionCreator<Type, C>]> {
  return on(actionType, (state: State, action): State => produce(state, (draft) => callback(draft, action)));
}
