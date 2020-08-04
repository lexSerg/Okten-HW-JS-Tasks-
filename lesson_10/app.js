userCard = (num) => {
  let key = num;
  let balance = 100;
  let transactionLimit = 100;
  let historyLogs = [];
  getCardOptions = () => {
    return { balance, transactionLimit, historyLogs, key };
  };
  putCredits = (money) => {
    balance += money;
    console.log(`Deposite credits on card '${key}' of ${money} UAH`);
    historyLogs.push({
      operationTipe: "Deposite credits",
      credits: balance,
      operationTyme: getDate(),
    });
  };
  setTransactionLimit = (money) => {
    transactionLimit = money;
    console.log(`Your transaction limit increased to ${money} UAH`);
    historyLogs.push({
      operationType: "Transaction limit change",
      credits: balance,
      operationTime: getDate(),
    });
  };
  checkTransaction = (money) => {
    if (this.balance < money) {
      console.error("Транзакция недоступна, недостаточно средств");
      return false;
    }
    if (this.transactionLimit < money) {
      console.error("Транзакция недоступна, превышен лимит на снятие средств");
      return false;
    }
    return true;
  };

  takeCredits = (money) => {
    if (checkTransaction(money)) balance -= money;
  };
  transferCredits = (money, cardOfRecipient) => {
    if (checkTransaction(money)) {
      (balance -= money + money * 0.005),
        console.log("Средства успешно переведены");
        cardOfRecipient.putCredits(money);
    } else return;
  };
  getDate = () => {
    let date = new Date();
    let strDate = date.toLocaleDateString();
    let strTime = date.toLocaleTimeString();
    return `${strDate}, ${strTime}`;
  };
  return {
    getCardOptions,
    putCredits,
    takeCredits,
    setTransactionLimit,
    transferCredits,
  };
};
let card1 = userCard(3);
let card2 = userCard(2);
console.log(card1.getCardOptions());

card1.putCredits(500);
card1.putCredits(1000);
card1.setTransactionLimit(500);
console.log(card1.getCardOptions());

card1.transferCredits(400, card2);
console.log(card1.getCardOptions());
console.log(card1);
