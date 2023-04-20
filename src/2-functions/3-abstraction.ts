// ❌
class Database {
  select(query: string) {
    return 0;
  }
}
const db = new Database();

// function getAvailablePlaces(tripId: string) {
//   const queryTrips = "select capacity from trips where tripId=" + tripId;
//   const capacity = db.select(queryTrips);

//   const queryBookings = "select sum(seats) from bookings where tripId=" + tripId;
//   const tripBookedSeats = db.select(queryBookings);

//   const free = capacity - tripBookedSeats;
//   const OVERBOOKING_FACTOR = 1.05;
//   return free * OVERBOOKING_FACTOR;
// }

// 😏 presentation level (👔 storefront workers)
function getAvailablePlaces(tripId: string) {
  const freeSeats = getFreeSeats(tripId);
  return calculateAvailable(freeSeats);
}
// 😏 logical level (👩🏼‍💻 administrative workers)
function getFreeSeats(tripId: any) {
  const capacity = selectTripCapacity(tripId);
  const tripBookedSeats = selectTripBookedSeats(tripId);
  return capacity - tripBookedSeats;
}
function calculateAvailable(freeSeats: number) {
  const OVERBOOKING_FACTOR = 1.05;
  return freeSeats * OVERBOOKING_FACTOR;
}
// 😏 data level (🧑🏼‍🏭 hardcore workers)
function selectTripCapacity(tripId: string): number {
  const queryCapacity = "select capacity from trips where tripId=" + tripId;
  return db.select(queryCapacity);
}
function selectTripBookedSeats(tripId: string): number {
  const queryBookings = "select sum(seats) from bookings where tripId=" + tripId;
  return db.select(queryBookings);
}
