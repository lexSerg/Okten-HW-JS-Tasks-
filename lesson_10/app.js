userCard = (num) => {
  checkCardKey = (num) => {
    if (num < 1 && num > 3)
      return "Exceeded card creation limit. Contact the bank to details";
  };
  checkCardKey(num);
  let key = num;
  let balance = 100;
  let transactionLimit = 100;
  const historyLogs = [];
  getCardOptions = () => {
    return { balance, transactionLimit, historyLogs, key };
  };
  putCredits = (money) => {
    if (money < 0) {
      console.log("Incorrect input. Negative value cannot be added");
      return;
    }
    balance += money;
    console.log(
      `Deposite credits on card '${key}' on ${money} UAH. Balans: ${balance} UAH`
    );
    historyLogs.push({
      operationType: "Deposite credits",
      credits: money,
      operationTyme: getDate(),
    });
  };
  setTransactionLimit = (money) => {
    transactionLimit = money;
    console.log(`Your transaction limit increased to ${money} UAH`);
    historyLogs.push({
      operationType: "Transaction limit change",
      credits: money,
      operationTime: getDate(),
    });
  };
  checkTransaction = (money, bal, limit) => {
    if (bal < money * 1.005) {
      console.error("Transaction unavailable, insufficient funds");
      return false;
    }
    if (limit <= money) {
      console.error("Transaction unavailable, withdrawal limit exceeded");
      return false;
    }
    return true;
  };
  takeCredits = (money) => {
    if (checkTransaction(money, balance, transactionLimit)) {
      balance -= money;
      console.log(
        `Withdrawing funds from the card '${key}' on ${money} UAH. Balans: ${balance} UAH`
      );
      historyLogs.push({
        operationType: "Withdrawing funds",
        credits: money,
        operationTyme: getDate(),
      });
    }
  };
  transferCredits = (money, cardOfRecipient) => {
    if (checkTransaction(money, balance, transactionLimit)) {
      balance -= money + money * 0.005;
      cardOfRecipient.putCredits(money);
      historyLogs.push({
        operationType: "Withdrawing funds(transfer)",
        credits: money,
        operationTyme: getDate(),
      });
      //cardOfRecipient.putCredits(money);
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
class UserAccount {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }
  addCards() {
    if (this.cards.length > 2) {
      console.log("Exceeded card creation limit. Contact the bank to details");
      return;
    }
    let cardNum = this.cards.length + 1;
    let newCard = userCard(cardNum);
    if (typeof newCard === "string") return;
    this.cards.push(newCard);
  }
  getCardByKey(cardNum) {
    if (cardNum < 1 || cardNum > 3) {
      console.log("The card you selected does not exist");
      return;
    }
    for (let i = 0; i < this.cards.length; i++) {
      //console.log(this.cards[i]);
      if (this.cards[i].getCardOptions().key === cardNum) {
        return this.cards[i];
      }
    }
  }
}
//Пример перевода средств из дз:
let user = new UserAccount("John");
user.addCards();
user.addCards();
user.addCards();
user.addCards();
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500);
card1.setTransactionLimit(800);
console.log(card1.getCardOptions());
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());

// //Cвой пример перевода
// let user = new UserAccount("John");
// user.addCards();
// user.addCards();
// user.addCards();
// user.addCards();
// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);
// let card3 = user.getCardByKey(3);
// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.takeCredits(200);
// card3.takeCredits(50);
// console.log(card1.getCardOptions());
// card1.transferCredits(300, card2);
// card2.takeCredits(50);
// console.log(card1.getCardOptions());
// console.log(card2.getCardOptions());
// console.log(card3.getCardOptions());
