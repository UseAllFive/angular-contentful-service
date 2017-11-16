[![GitHub release](https://img.shields.io/github/release/UseAllFive/angular-contentful-service.svg)]() [![GitHub license](https://img.shields.io/github/license/UseAllFive/angular-contentful-service.svg)](https://github.com/UseAllFive/angular-contentful-service) [![GitHub issues](https://img.shields.io/github/issues/UseAllFive/angular-contentful-service.svg)](https://github.com/UseAllFive/angular-contentful-service/issues) [![Twitter](https://img.shields.io/twitter/url/https/github.com/UseAllFive/angular-contentful-service.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FUseAllFive%2Fangular-contentful-service)

# Angular Contentful Service

A [contentful.js](https://github.com/contentful/contentful.js/) wrapper for [Angular](http://angular.io) that makes our lives just a bit easier. Also, requests to the Contentful API are cached for improved performance!

## Installation

### Install with NPM

```
npm i --save angular-contentful-service
```

### Install contentful

If you haven't already, make sure you install contentful

```
npm i --save contentful
```

Note: at the time of writing this, there is an issue with version 5.0.4 of Contentful. You may want to make sure you install 5.0.3 or the fix that comes after 5.0.4.

### Add to your app module

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContentfulModule } from 'angular-contentful-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContentfulModule.forRoot({
      space: 'yadj1kx9rmg0', // your space ID
      accessToken: 'fdb4e7a3102747a02ea69ebac5e282b9e44d28fb340f778a4f5e788625a61abe', // your access token
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Use the Contentful Service

```typescript
import { Component } from '@angular/core';
import { ContentfulService } from 'angular-contentful-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cs: ContentfulService) {}

  getEntries(query?: any) {
    this.cs.getEntries(query).then(res => console.log(res));
  }

  getEntry(id: string, query?: any) {
    this.cs.getEntry(id, query).then(res => console.log(res));
  }
}
```

## Configuration options

```typescript
{
  space: string;
  accessToken: string;
  insecure?: boolean;
  host?: string;
  basePath?: string;
  httpAgent?: any;
  httpsAgent?: any;
  proxy?: {
    host: string;
    port?: number;
    auth?: {
      username: string;
      password: string;
    };
  };
  headers?: any;
  application?: string;
  integration?: string;
  resolveLinks?: boolean;
  retryOnError?: boolean;
}
```

## Service methods

### getEntries()

Return all entries filtered by Contentful query

```typescript
getEntries(query?: any): Promise<EntryCollection<any>>
```

Information on `EntryCollection` type found here: https://github.com/contentful/contentful.js/blob/master/index.d.ts#L34

Example:

```typescript
this.cs.getEntries({include: 2});
```

### getEntry()

Return a single entry object based on `id` and optional `query` params

```typescript
getEntry(id: string, query?: any): Promise<Entry<any>>
```

Information on `Entry` type found here: https://github.com/contentful/contentful.js/blob/master/index.d.ts#L65

Example:

```typescript
this.cs.getEntry('3xd57HfJlSM2qmm8C6cueK', {include: 2})
```

## Contribute

Please feel free to contribute to this repository. To do so, simply clone this repository and run `ng serve` to get the project working locally.

## Brought to you by

[![Use All Five](https://avatars0.githubusercontent.com/u/1775836?s=75&v=4)](http://useallfive.com)
