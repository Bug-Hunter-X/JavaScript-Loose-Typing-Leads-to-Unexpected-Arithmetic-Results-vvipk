function foo(a, b) {
  // Explicit type checking and conversion
  if (typeof a !== 'number' || typeof b !== 'number') {
    a = parseFloat(a);
    b = parseFloat(b);
    if(isNaN(a) || isNaN(b)) {
      return "Invalid input: Operands must be numbers";
    }
  }
  return a + b;
}
console.log(foo(1, 2)); // Output: 3
console.log(foo(1, "2")); // Output: 3
console.log(foo(true, false)); // Output: 1
console.log(foo("abc", 2)); //Output: Invalid input: Operands must be numbers