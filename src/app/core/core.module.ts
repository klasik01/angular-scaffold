import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppStateFeatures} from '@app/app-state-features';
import {AppRouterStateSerializer} from '@core/config/router-state-serializer';
import {reducers} from '@core/store';
import {CoreEffects} from '@core/store/effects/core.effects';
import {TranslateEffects} from '@core/store/effects/translate.effects';
import {environment} from '@environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {DefaultRouterStateSerializer, RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {TranslateCompiler, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {MESSAGE_FORMAT_CONFIG, TranslateMessageFormatCompiler} from 'ngx-translate-messageformat-compiler';
import {TranslateHttpLoaderFactory} from './config/translate-http-loader-factory';
import {throwIfAlreadyLoaded} from './module-import-guard';

export const modules = [BrowserModule, BrowserAnimationsModule, HttpClientModule];

@NgModule({
  imports: [
    ...modules,
    TranslateModule.forRoot({
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler,
      },
      loader: {
        deps: [HttpClient],
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
      },
    }),
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      }
    ),
    StoreModule.forFeature(AppStateFeatures.Core, reducers),
    StoreDevtoolsModule.instrument({
      name: 'Angular App Boilerplate',
      maxAge: 50, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    StoreRouterConnectingModule.forRoot({serializer: DefaultRouterStateSerializer}),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([TranslateEffects, CoreEffects]),
  ],
  providers: [
    {
      provide: MESSAGE_FORMAT_CONFIG,
      useValue: {locales: ['cs', 'en']},
    },
    {
      provide: RouterStateSerializer,
      useClass: AppRouterStateSerializer,
    }
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
