/*

In this file we can define all the bento-data queries that are needed in our app.

A few basic ones come out of the box with bento-data: you can see an example of using the
`location` query below.

*/

import { Query, location } from '@buildo/bento/data';

import { locationToView } from 'model';

export { location };

export const currentView = Query({
  // this query has no input params
  params: {},

  // depends on the `location` query (waits its result before `fetch()`ing)
  dependencies: { location: location },

  // `fetch()` receives in input the declared `dependencies` and
  // just maps the location into our custom domain model `CurrentView`
  fetch: ({ location }) => Promise.resolve(locationToView(location))
});
