function checkCashRegister(price, cash, cid) {

  const CURRENCYLIST = {
      "ONE HUNDRED" : 100,
      "TWENTY"  : 20,
      "TEN"     : 10,
      "FIVE"    : 5,
      "ONE"     : 1,
      "QUARTER" : 0.25,
      "DIME"    : 0.10,
      "NICKEL"  : 0.05,
      "PENNY"   : 0.01,
  };

  /* Sort drawer in case it is not given in proper order */
  let drawer = cid.sort( (a,b) => {
      return CURRENCYLIST[a[0]] - CURRENCYLIST[b[0]];
  });

  /*
   * The amount we have to pay will be decreased
   * and the change object will be updated as we iterate
   */
  let changeAmount = ( cash - price );
  let change = {};
  // Assume the status as CLOSED for start and update if necessary
  let status = "CLOSED";

  for (let i = drawer.length - 1; i>=0; i--) {
      // The following two variables is just for easy code reading
      let value = CURRENCYLIST[drawer[i][0]];
      let remainingAmount = drawer[i][1];

      if (changeAmount > value && remainingAmount > 0 ){
          let giveAmount = Math.min(remainingAmount, changeAmount);
          giveAmount = (Math.floor(giveAmount/value)*value).toFixed(2);
          drawer[i][1] = remainingAmount - giveAmount;
          changeAmount = (changeAmount - giveAmount).toFixed(2);
          change[drawer[i][0]] = parseFloat(giveAmount);;
      }
      if (drawer[i][1]>0)
          status="OPEN"
  }

  if (changeAmount>0)
      return {status: 'INSUFFICIENT_FUNDS', change: []};

  /* return change with cash-in-drawer a */
  if ( "CLOSED" == status) {
       return {status: status, change : drawer.map( ( item ) => {
          if ( change.hasOwnProperty( item[0]) )
              return [item[0], change [item[0]]];
          return item;
       })}   
  }

  /* return change only */
  return {status: status, change: Object.entries(change)}
      
}

checkCashRegister(19.5, 20, [["NICKEL", 2.05], ["PENNY", 1.01], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 0]]);