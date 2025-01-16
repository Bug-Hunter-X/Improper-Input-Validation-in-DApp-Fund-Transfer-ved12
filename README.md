# Improper Input Validation in DApp Fund Transfer

This repository demonstrates a common error in decentralized applications (DApps): insufficient input validation. The `transferFunds` function in `bug.js` lacks robust validation for the `amount` parameter. This vulnerability can allow for unexpected behavior or security exploits.

The `bugSolution.js` file provides a corrected version with improved input validation, preventing potential issues.

## How to Reproduce the Bug

1.  Run `bug.js`.
2.  Attempt to transfer funds with a negative or zero amount.
3.  Observe the error message.