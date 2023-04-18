// ❌
// const created_at = new Date(); // 🤢 avoid symbols
// const workingDays = 5; // 🤢 a cons primitive is a CONSTANT
// function Calculate_payroll(){

//   // 🤢 oh lord...
// }
// class employee {
//   // 🤢 type definition should be PascalCase
// }
// interface IPayable {
//   // 🤢 an interface is not a class; find a good name
// }

// ✅
const createdAt = new Date(); // 😏 camelCaseIsEasyToRead
const WORKING_DAYS = 5; // 😏 CONSTANTS SHOULD SCREAM
function calculatePayroll() {
  // 😏 function naming is naming
}
class Employee {
  // 😏 Type Definition
}
interface Pay {
  // 😏 is about behavior
}
