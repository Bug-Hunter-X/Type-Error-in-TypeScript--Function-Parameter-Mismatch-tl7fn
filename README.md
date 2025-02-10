# TypeScript Type Error Example

This repository demonstrates a common type error in TypeScript: passing a string argument to a function expecting a number.

## The Bug

The `add` function is defined to accept two numbers and return their sum. However, in the usage example, the second argument is a string. This will cause a type error. 

## The Solution

The solution involves explicitly type checking the arguments before they're added.  A more robust approach might be to use `isNaN()` to handle the case where inputs aren't numbers.