/*

You may write here any type that you want to re-use in you application.

ex:

export type Foo = {
  bar: number
}

and in any file:

import { Foo } from 'model'

const foo: Foo = { bar: 5 }



Here we define a type `CurrentView` and two helper functions that are used
in the example app created by default:

*/

import * as t from "io-ts";

export const IYelpBusiness = t.interface({
  id: t.string,
  name: t.string,
  rating: t.number,
  distance: t.number,
  phone: t.string,
  image_url: t.string
});
export type IOYelpBusiness = t.TypeOf<typeof IYelpBusiness>;

export interface RestaurantInfo {
  name: string;
  rating: number;
  phone: string;
  image: string;
  isPlaceholder: boolean;
}

export default IOYelpBusiness;
