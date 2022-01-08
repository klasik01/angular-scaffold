import { HttpClient } from '@angular/common/http';
import { IModuleTranslationOptions, ModuleTranslateLoader } from '@larscom/ngx-translate-module-loader';

export function TranslateHttpLoaderFactory(http: HttpClient): ModuleTranslateLoader {
  const baseTranslateUrl = './assets/i18n';

  const options: IModuleTranslationOptions = {
    translateError: (error, path) => {
      console.error('Oops! an error occurred: ', { error, path });
    },
    modules: [
      // final url: ./assets/i18n/en.json
      { baseTranslateUrl }
    ],
    // nameSpaceUppercase: false,
  };

  return new ModuleTranslateLoader(http, options);
}
