import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "@app/app-state";
import {applicationInit} from "@core/store/actions/core.actions";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  template: `
    <ngx-loading-bar color="#E57645" height="4"></ngx-loading-bar>
    <app-nav></app-nav>
  `,
})
export class AppComponent implements OnInit {

  constructor(
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(applicationInit())
  }
}
