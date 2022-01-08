import { Params, RouterStateSnapshot } from '@angular/router';
import { AppRouterState } from '@core/models/router-state';
import { AppRouterStateSerializer } from './router-state-serializer';

interface MockActiveStateSnapshot {
  queryParams?: Params;
  params?: Params;
  firstChild: MockActiveStateSnapshot | null;
}

interface MockRouterStateSnapshot {
  url: string;
  root: MockActiveStateSnapshot;
}

describe('RouterStateSerializer', () => {
  let appRouterStateSerializer: AppRouterStateSerializer;

  beforeEach(() => {
    appRouterStateSerializer = new AppRouterStateSerializer();
  });

  it('should create', () => {
    expect(appRouterStateSerializer).toBeTruthy();
  });

  it('should serialize AppRouterState', () => {
    const routerState: MockRouterStateSnapshot = {
      root: {
        firstChild: {
          firstChild: null,
          params: {},
          queryParams: {},
        },
        queryParams: {
          param: 'true',
        },
      },
      url: '/home?param=true',
    };
    const expected: AppRouterState = {
      feature: 'Home',
      params: {},
      queryParams: {
        param: 'true',
      },
      url: '/home?param=true',
    };
    expect(appRouterStateSerializer.serialize(routerState as RouterStateSnapshot)).toEqual(expected);
  });

  it('should get feature from url', () => {
    let url = '/home';
    let expected = 'Home';
    expect(appRouterStateSerializer.getFeature(url)).toBe(expected);
    url = '/';
    expected = '';
    expect(appRouterStateSerializer.getFeature(url)).toBe(expected);
  });
});
