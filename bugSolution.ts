function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

const result1 = add(5, 10); // Works correctly

const result2 = addSafe(5, 10); // Works correctly

try {
  const result3 = addSafe(5, "10"); // Throws an error, handled gracefully
} catch (e) {
  console.error(e);
}

const result4 = addSafe(5, parseInt("10"));// Convert string to number before passing to the function
console.log(result4); 