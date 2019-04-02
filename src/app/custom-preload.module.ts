import { PreloadingStrategy, Route } from '@angular/router';

import { Observable, of } from 'rxjs';

export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
      console.log(route.data);
    return route.data && route.data.preload ? load() : of(null);
  }
}
