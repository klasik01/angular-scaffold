export type CustomIconConfig = ReadonlyArray<CustomIcon>;

export interface CustomIcon {
  name: string;
  path: string;
}

const getLibraryIconPath = (assetsFolder: string): string => `assets/icons/${assetsFolder}`;

export const appCustomIcons: CustomIconConfig = [
  /**
   * FOLDER: ACTIONS
   */
  {
    name: 'operation',
    path: getLibraryIconPath('actions'),
  },
  {
    name: 'play',
    path: getLibraryIconPath('actions'),
  },
  {
    name: 'save',
    path: getLibraryIconPath('actions'),
  },
  {
    name: 'search',
    path: getLibraryIconPath('actions'),
  },
  {
    name: 'share',
    path: getLibraryIconPath('actions'),
  },
  /**
   * FOLDER: LANG
   */
  {
    name: 'en',
    path: getLibraryIconPath('lang'),
  },
  {
    name: 'cs',
    path: getLibraryIconPath('lang'),
  },
  {
    name: 'jp',
    path: getLibraryIconPath('lang'),
  },
  /**
   * FOLDER: Navigation
   */
  {
    name: 'search',
    path: getLibraryIconPath('navigation'),
  },
];
