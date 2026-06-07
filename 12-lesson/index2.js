class ATM {
  static totalTransactions = 0;

  
  constructor(bankName, initialBalance) {
    this.bankName = bankName;
    this.balance = initialBalance; 
  }

  
  #verifyPin(pin) {
    if (pin === 1234) {
      return true; 
    } else {
      console.log("Wrong PIN");
      return false; 
    }
  }

  
  #updateBalance(amount) {
    this.balance -= amount; 
  }


  #printReceipt(amount) {
    console.log(`Receipt: withdrew ${amount}. Remaining: ${this.balance}`);
  }

  
  withdraw(pin, amount) {    
    if (!this.#verifyPin(pin)) {
      return; 
    }

    
    if (this.balance < amount) {
      console.log("Insufficient funds");
      return; 
    }
   
    this.#updateBalance(amount);
    this.#printReceipt(amount);
    
    ATM.totalTransactions++;
  }
}


const myAtm = new ATM('Bank Hapoalim', 1000);

console.log("--- Test 1: Wrong PIN ---");
myAtm.withdraw(9999, 200); 


console.log("\n--- Test 2: Insufficient funds ---");
myAtm.withdraw(1234, 1500); 


console.log("\n--- Test 3: Successful withdrawal ---");
myAtm.withdraw(1234, 300); 


console.log("\n--- Test 4: Check total transactions ---");
console.log(`Total ATM transactions worldwide: ${ATM.totalTransactions}`); 
