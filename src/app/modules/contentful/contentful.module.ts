import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Config} from './config';
import { ContentfulService } from './contentful.service';
export { ContentfulService } from './contentful.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ContentfulService]
})

export class ContentfulModule {

  static forRoot(config: Config): ModuleWithProviders {
    return {
      ngModule: ContentfulModule,
      providers: [
        {provide: Config, useValue: config }
      ]
    };
  }
}
