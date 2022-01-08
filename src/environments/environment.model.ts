export interface Environment {
  production: boolean;
  api: string;
  auth: string;
  envName: string;
  version?: string;
  matomoSiteID: number;
  matomoSiteURL: string;
}
