
const menu = {
  pizza: 200,
  burger: 120,
  fries: 80,
  coke: 40
};

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map(item => {
      if (!menu[item]) throw new Error(`Invalid item: ${item}`);
      return menu[item];
    });

    const total = prices.reduce((a, b) => a + b, 0);
    console.log("Total Bill:", total);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

calculateBill(["pizza", "coke"]);
calculateBill(["pizza", "sandwich"]);
