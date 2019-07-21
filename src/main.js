const {
  BlockChain,
  Transaction
} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('3f9a272552877847670650d73f626acb865502bae3d93b988e42502279190ef1');
const myWalletAddress = myKey.getPublic('hex');

let myNewCoin = new BlockChain();

const tx1 = new Transaction(myWalletAddress, 'Public key goes here', 10);
tx1.signTransaction(myKey);
myNewCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
myNewCoin.minePendingTransactions(myWalletAddress);
console.log('\nBalance of xavier is', myNewCoin.getBalanceOfAddress(myWalletAddress));
