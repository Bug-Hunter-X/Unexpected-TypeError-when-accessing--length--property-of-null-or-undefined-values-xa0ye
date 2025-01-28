# JavaScript Bug: Unexpected TypeError

This repository demonstrates a common JavaScript error: attempting to access the `length` property of a value that doesn't have it (e.g., null, undefined, or a primitive). The `bug.js` file contains the erroneous code, and `bugSolution.js` provides a corrected version.

## Problem

The original code attempts to return the length of an input variable 'x'.  However, it doesn't perform any checks to see if 'x' is even an object with a length property, leading to a `TypeError` if 'x' is null, undefined, or a primitive type.

## Solution

The improved code includes a check for null/undefined values and ensures 'x' is an object with a 'length' property before accessing it.  If 'x' is not a suitable object, it provides a default behavior instead of throwing an error.

## How to run

1. Clone the repository.
2. Open the files in your preferred JavaScript environment (e.g., a browser console or Node.js).
3. Run the code to observe the behavior of the original and corrected versions.
