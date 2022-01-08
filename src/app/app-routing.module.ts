import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from "@shared/components/page-not-found/page-not-found.component";
import {RouterPaths} from "@shared/const/routing/router-path.constants";

export const routes: Routes = [
  {
    component: PageNotFoundComponent,
    path: RouterPaths.WILDCARD,
  },
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
})
export class AppRoutingModule {
}
