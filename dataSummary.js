let userName = "Priyanshu";
let age = 21;
let isLoggedIn = true;
let hobbies = ["coding", "gaming", "music"];
let userDetails = { city: "Delhi", country: "India" };
let emptyValue = null;
let notAssigned;

console.table([
  { Label: "Username", Value: userName, Type: typeof userName },
  { Label: "Age", Value: age, Type: typeof age },
  { Label: "Is Logged In", Value: isLoggedIn, Type: typeof isLoggedIn },
  { Label: "Hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { Label: "User Details", Value: userDetails, Type: typeof userDetails },
  { Label: "Empty Value", Value: emptyValue, Type: typeof emptyValue },
  { Label: "Not Assigned", Value: notAssigned, Type: typeof notAssigned }
]);
