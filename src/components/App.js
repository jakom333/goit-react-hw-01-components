import React from 'react';
import Profile from './profile/Profile.js';
import user from '../database/user.json';
import Statistics from './statistics/Statistics.js';
import statisticalData from '../database/statistical-data.json';
import friends from '../database/friends.json';
import FriendList from './friendList/FriendList.js';
import transactions from '../database/transaction-history.json';
import TransactionHistory from './transactionHistory/TransactionHistory.js';

const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
