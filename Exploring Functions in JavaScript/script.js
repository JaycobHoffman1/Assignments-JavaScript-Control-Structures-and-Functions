let currentBalance = 2000;

// Task 3: Develop a function to check the current balance of the account.

const checkCurrentBalance = () => {
    console.log(`Your current balance is $${currentBalance}.`);
}

checkCurrentBalance();

// Task 1: Create a function to handle deposits into a bank account.

let depositAmount = ''; // Enter amount to deposit here
depositAmount *= 1;

const makeDeposit = (amount) => {
    if (amount) {
        currentBalance += amount;
        console.log('Deposit successful!');
    } else {
        console.log('Please enter an amount to deposit.');
    }
}

makeDeposit(depositAmount);
checkCurrentBalance();

// Task 2: Implement a function to handle withdrawals from a bank account, ensuring sufficient balance.

let withdrawalAmount = ''; // Enter amount to withdraw here
withdrawalAmount *= 1;

const makeWithdrawal = (amount) => {
    if (amount) {
        if (amount > currentBalance) {
            console.log('Unable to make withdrawal due to insufficient account balance.');
        } else {
            currentBalance -= amount;
            console.log('Withdrawal successful!');
        }
    } else {
        console.log('Please enter an amount to withdraw.');
    }
}

makeWithdrawal(withdrawalAmount);
checkCurrentBalance();