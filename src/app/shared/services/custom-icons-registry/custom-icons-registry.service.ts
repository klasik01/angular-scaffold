import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { appCustomIcons } from './config';

/**
 * This component allows registration of custom components with the Angular Material repository.
 * So that the mat-icon component can be used with the custom svg icons.
 */
@Injectable({
  providedIn: 'root',
})
export class CustomIconsRegistryService {
  constructor(private readonly iconRegistry: MatIconRegistry, private readonly sanitizer: DomSanitizer) {}

  register(): void {
    for (const icon of appCustomIcons) {
      this.iconRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(`${icon.path}/${icon.name}.svg`)
      );
    }
  }
}
