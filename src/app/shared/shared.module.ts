import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {NavComponent} from './components/nav/nav.component';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {LoadingBarRouterModule} from "@ngx-loading-bar/router";
import {LoadingBarModule} from "@ngx-loading-bar/core";
import {LoadingBarHttpClientModule} from "@ngx-loading-bar/http-client";
import {CustomMaterialModule} from "@shared/modules/custom-material.module";

const modules = [
  CommonModule,
  RouterModule,
  TranslateModule,
  LoadingBarRouterModule,
  LoadingBarHttpClientModule,
  LoadingBarModule,
  CustomMaterialModule
] as any;
const components = [
  NavComponent,
  NavigationBarComponent,
  PageNotFoundComponent] as any;
const pipes = [] as any;

@NgModule({
  declarations: [...components, ...pipes],
  exports: [...pipes, ...modules, ...components],
  imports: [...modules],
})
export class SharedModule {
}
