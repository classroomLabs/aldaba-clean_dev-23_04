// ❌
function sendTripDetails() {
  const passengers: any[] = getPassengers();
  if (passengers === null) {
    throw new Error("No passengers found");
  }
  if (passengers.length === 0) {
    return;
  }
  for (let i = 0; i <= passengers.length; i++) {
    sendTripDetailsToPassenger(passengers[i]);
  }
}
function getPassengers() {
  return [];
}
function sendTripDetailsToPassenger(passenger: any) {
  if (!passenger.hasAcceptedCommunications) {
    return;
  }
  if (passenger.emailAddress) {
    // 🤢 I am lost in the pyramid
    console.log("send trip details by email", passenger.emailAddress);
  }
  if (passenger.phoneNumber) {
    console.log("send trip details by SMS", passenger.phoneNumber);
  }
}
