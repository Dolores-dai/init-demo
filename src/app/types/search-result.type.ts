import { Opportunity } from './opportunity.type';
import { Dso } from './dso.type';

export interface SearchResult {
  opportunity?: Opportunity;
  dso?: Dso;
  songs?: Song[];
}

export interface Song {
  id: number;
  name: string;
  url: string;
  al: { id: number; name: string; picUrl: string };
  dt: number;
}
