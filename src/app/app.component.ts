import { Component } from '@angular/core';
import { ContentfulService } from './modules/contentful/contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  r: any;
  l = false;

  constructor(private cs: ContentfulService) {}

  getEntries(query?: any) {
    this.l = true;
    this.cs.getEntries(query).then(res => {
      this.r = res;
      this.l = false;
    });
  }

  getEntry(id: string, query?: any) {
    this.l = true;
    this.cs.getEntry(id, query).then(res => {
      this.r = res;
      this.l = false;
    });
  }
}
