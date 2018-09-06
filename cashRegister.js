function checkCashRegister(price, cash, cid) {
  const cid100 = cid.map(pair => [pair[0], Math.round(pair[1] * 100)]);
  let change = Math.round(cash * 100 - price * 100);
  let insufficient = false;
  const denoms = [5, 10, 25, 100, 500, 1000, 2000, 10000]
  denoms.map((denom, index) => {
    let denomChange = change % denom;
    if (denomChange !== 0) {
      for (let i = index; i >= 0; i--) {
        if (cid100[i][1] >= denomChange) {
          cid100[i][1] -= denomChange;
          change -= denomChange;
          break;
        } else if (cid100[i][1] > 0) {
          denomChange -= cid100[i][1];
          change -= cid100[i][1];
          cid100[i][1] = 0;
        }
        if (i === 0 && denomChange > 0) {
          insufficient = true;
        }
      }
    }
  });
  if (insufficient) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } 
  else if (cid100.every(denom => denom[1] === 0)) {
    return {status: "CLOSED", change: cid};
  }
  else {   
    let cidChange = cid.map((pair, i) => [pair[0], (Math.round(pair[1] * 100) - cid100[i][1]) / 100])
      .filter(pair => pair[1] > 0).reverse();      
    return {status: "OPEN", change: cidChange};
  }
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));