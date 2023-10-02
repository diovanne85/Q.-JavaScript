function topProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let maxProfit = -Infinity;
  let topProduct = "";

  for (const product of productProfitArray) {
    const profit = product.value;
    if (profit > maxProfit) {
      maxProfit = profit;
      topProduct = product.key;
    }
  }

  return topProduct;
}

function bottomProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let minProfit = Infinity;
  let bottomProduct = "";

  for (const product of productProfitArray) {
    const profit = product.value;
    if (profit < minProfit) {
      minProfit = profit;
      bottomProduct = product.key;
    }
  }

  return bottomProduct;
}

function zeroProfitProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let closestToZeroProduct = "";
  let closestToZeroProfit = Infinity;

  for (const product of productProfitArray) {
    const profit = product.value;
    const absProfit = Math.abs(profit);

    if (
      absProfit < Math.abs(closestToZeroProfit) ||
      (absProfit === Math.abs(closestToZeroProfit) &&
        profit > closestToZeroProfit)
    ) {
      closestToZeroProfit = profit;
      closestToZeroProduct = product.key;
    }
  }

  return closestToZeroProduct;
}

// Example usage:
const productProfitArray = [
  { key: "Product A", value: 50 },
  { key: "Product B", value: -100 },
  { key: "Product C", value: 75 },
  { key: "Product D", value: 25 },
];

console.log(topProduct(productProfitArray));
console.log(bottomProduct(productProfitArray)); 
console.log(zeroProfitProduct(productProfitArray)); 
