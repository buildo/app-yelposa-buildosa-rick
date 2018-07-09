/*

In this file we can define all the bento-data queries that are needed in our app.

A few basic ones come out of the box with bento-data: you can see an example of using the
`location` query below.

*/

import { Query } from "@buildo/bento/data";

import { getRestaurants } from "API";

import * as t from "io-ts";

export const restaurantsList = Query({
  params: { location: t.string, range: t.number },
  dependencies: {},
  // `fetch()` receives in input the declared `dependencies` and
  // just maps the location into our custom domain model `CurrentView`
  fetch: ({ location, range }) => getRestaurants(location, range)
});
