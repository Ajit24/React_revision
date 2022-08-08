var n = 5;
// 1 2 3 4 5

function assendingOrder(n) {
  if (n === 0) {
    return;
  }

  assendingOrder(n - 1);
  console.log(n);
}

assendingOrder(n);