import { Injectable } from "@angular/core";
import {
  ContentfulClientApi,
  createClient,
  Entry,
  EntryCollection
} from "contentful";
import { Config } from "./config";

@Injectable()
export class ContentfulService {
  entries: { [id: string]: Promise<EntryCollection<any>> } = {};
  entry: { [id: string]: Promise<Entry<any>> } = {};
  client: ContentfulClientApi;

  constructor(private config: Config) {
    this.createClient(config);
  }

  private createClient(params: Config) {
    this.client = createClient(params);
  }

  public getEntries(query?: any): Promise<EntryCollection<any>> {
    let key: string;
    key = query ? JSON.stringify(query) : "no-query";
    // Cache promise for future use
    if (!this.entries[key]) {
      this.entries[key] = this.client.getEntries(query);
    }
    return this.entries[key];
  }

  public getEntry(id: string, query?: any): Promise<Entry<any>> {
    let key: string;
    key = query ? JSON.stringify(query) : "no-query";
    // Cache promise for future use
    if (!this.entry[key]) {
      this.entry[key] = this.client.getEntry(id, query);
    }
    return this.entry[key];
  }
}
