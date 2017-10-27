import { Component } from '@angular/core';
import { ContentfulService } from './modules/contentful/contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cs: ContentfulService) {

  }

  getEntries(query?: any) {
    this.cs.getEntries(query).then(res => console.log(res));
  }

  getEntry(id: string, query?: any) {
    this.cs.getEntry(id, query).then(res => console.log(res));
  }
}
