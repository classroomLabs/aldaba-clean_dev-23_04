// ❌
function saveTripBooking(clientBooking: object, paymentData: object, confirmationMessage: object) {
  // 🤢 make payment
  console.log("making a payment with", paymentData);
  // 🤢 save booking
  console.log("saving booking", clientBooking);
  // 🤢 send a confirmation email
  console.log("sending a confirmation email", confirmationMessage);
}

// ✅
function makePayment(clientBooking: object) {}
function saveBooking(paymentData: object) {}
function sendConfirmationEmail(confirmationMessage: object) {}

// ❌
function sendMessage(
  senderName: string,
  senderAddress: string,
  recipientAddress: string,
  subject: string,
  body: string
) {
  // 🤢 multiple similar parameters are error-prone
}
// ✅
type Message = {
  senderName: string;
  senderAddress: string;
  recipientAddress: string;
  subject: string;
  body: string;
}; // 😏 encapsulate variables in types or interfaces
function sendMessage(message: Message) {}
