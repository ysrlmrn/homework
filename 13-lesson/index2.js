// 1. מחלקת הבסיס
class PaymentMethod {
  constructor(ownerName) {
    this.ownerName = ownerName;
  }
  
  pay(amount) {
    console.log("pay() not implemented");
  }
  
  receipt(amount) {
    this.pay(amount);
    console.log(`Receipt sent to ${this.ownerName}\n`);
  }
}


class CreditCard extends PaymentMethod {
  constructor(ownerName, cardNumber) {
    super(ownerName);
    this.cardNumber = cardNumber;
  }
  
  pay(amount) {
    const last4 = this.cardNumber.slice(-4);
    console.log(`Charging ${amount} NIS to card ending in ${last4}`);
  }
}


class PayPal extends PaymentMethod {
  constructor(ownerName, email) {
    super(ownerName);
    this.email = email;
  }
  
  pay(amount) {
    console.log(`Sending ${amount} NIS via PayPal to ${this.email}`);
  }
}


class BankTransfer extends PaymentMethod {
  constructor(ownerName, iban) {
    super(ownerName);
    this.iban = iban;
  }
  
  pay(amount) {
    console.log(`Transferring ${amount} NIS from IBAN ${this.iban}`);
  }
}


const payments = [
  new CreditCard("Israel Israeli", "1234567812349876"),
  new PayPal("Sara Levi", "sara@example.com"),
  new BankTransfer("Moshe Cohen", "IL12345678901234567890")
];

for (let method of payments) {
  
  method.receipt(500); 
}