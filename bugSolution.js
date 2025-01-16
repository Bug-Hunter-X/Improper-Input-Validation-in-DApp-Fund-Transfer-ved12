```javascript
function transferFunds(amount) {
  // Validate amount
  if (typeof amount !== 'number' || amount <= 0 || !Number.isFinite(amount)) {
    throw new Error("Invalid amount. Amount must be a positive number.");
  }

  // ... other code to transfer funds ...
}
```