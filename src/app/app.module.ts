import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContentfulModule } from './modules/contentful/contentful.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContentfulModule.forRoot({
      space: 'yadj1kx9rmg0',
      accessToken: 'fdb4e7a3102747a02ea69ebac5e282b9e44d28fb340f778a4f5e788625a61abe',
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
