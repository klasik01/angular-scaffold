import { Component, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mat-icon',
  template: '<span></span>',
})
class MockMatIconComponent {
  @Input() svgIcon: string | null = null;
  @Input() fontSet: string | null = null;
  @Input() fontIcon: string | null = null;
}

export function PatchTestBedMatIcons(): void {
  const original = TestBed.configureTestingModule;
  TestBed.configureTestingModule = (moduleDef) => {
    return original(moduleDef).overrideModule(MatIconModule, {
      remove: {
        declarations: [MatIcon],
        exports: [MatIcon],
      },
      add: {
        declarations: [MockMatIconComponent],
        exports: [MockMatIconComponent],
      },
    });
  };
}
