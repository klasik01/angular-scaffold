import {NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {AppRoutingModule} from '@app/app-routing.module';
import {AppComponent} from '@app/app.component';
import {SharedModule} from '@shared/shared.module';

const modules = [CoreModule, AppRoutingModule, SharedModule];

const components = [AppComponent];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [...components],
  imports: [...modules],
  providers: []
})
export class AppModule {
}
