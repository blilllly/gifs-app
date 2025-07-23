import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ScrollStateService {

  trendingScrollState = signal(0);

  // pagesScroll: Record<string, number> = {
  //   'trendingPage': 1000,
  //   'searchPage': 0,
  //   'anotherPage': 0,
  // }

}
