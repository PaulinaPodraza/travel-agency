/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }
  //  filter by duration
  if (filters.duration) {
    output = output.filter(trip =>
    {
      console.log(trip);
      console.log(trip.days <= filters.duration.to && trip.days >= filters.duration.from, filters.duration.from, filters.duration.to, trip.days );
      return trip.days <= filters.duration.to && trip.days >= filters.duration.from;
    }
    );
  }
    // filter by tags
  if (filters.tags.length) {
    output = output.filter((trip) =>
      filters.tags.every((item) => trip.tags.includes(item))
    );
  }
  // sort by cost descending (most expensive goes first)
  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips;

  // filter trips by tripId
  trips.filter(trip => trip.tripId === tripId);

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips;

  // filter trips by countryCode
  trips.filter(trip => trip.countryCode === countryCode);

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
