// import { IYelpBusiness } from "model";

export const getRandomName = (length: number) => {
  return fetch(`http://uinames.com/api/?minlen=${length}&maxlen=${length}`)
    .then(res => res.json())
    .then(res => {
      return `${res.name} ${res.surname}`;
    }) as Promise<string>;
};

const API_KEY =
  "2KWxqPmEKXqgsSHCjIymjZmsAVXt7bzZO1O3pAFVUjZXMU6yyWkoUwXcLxJvRjq_-ZOnmvX15S01Zi2A7bc62Kr0Xwk5NEZ5k8f7c99H7mxQxeGIkBApX7SCXQlCW3Yx";

export const getRestaurants = (location: string, range: number) => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=restaurants&location=${location}&radius=${range}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  )
    .then(res => res.json())
    .then(res => {
      console.log(res);
      return res;
    }) as Promise<string>;
};
