// Q8 – Order Processing Flow: Async Retry Mechanism

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5 ? reject(new Error("Network/Server error")) : resolve("Order submitted");
    }, 500);
  });
}

async function processOrder(maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return;
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed`);
      if (attempt === maxAttempts) {
        throw new Error("Order could not be processed");
      }
    }
  }
}

// Run and handle final failure
(async () => {
  try {
    await processOrder(3);
    console.log("Order processed successfully.");
  } catch (err) {
    console.error(err.message);
  }
})();
