import {NgModule} from "@angular/core";

const modules = [] as any;
const components = [] as any;
const pipes = [] as any;

@NgModule({
  declarations: [...components, ...pipes],
  exports: [...pipes, ...modules, ...components],
  imports: [...modules],
})
export class ModulesModule {}
