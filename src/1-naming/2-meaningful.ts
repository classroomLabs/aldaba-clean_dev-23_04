// ❌
// function getClient() {
//   return "Alice";
// }
// function readProvider() {
//   return "Bob";
// } // 🤢 get is the same as read?
// function postCustomer(name: string) {} // 🤢 customer is the same as client?

// ✅
function getClient() {
  return "Alice";
}
// 😏 same action, same verb
function getProvider() {
  return "Bob";
}
function postClient(name: string) {} // 😏 a client is always client
