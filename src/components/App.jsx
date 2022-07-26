import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics'
import { FriendList } from 'components/FriendList/FriendList'
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory'
import user from 'incomingData/user.json'
import data from 'incomingData/data.json'
import friends from 'incomingData/friends.json'
import transactions from 'incomingData/transactions.json'


export const App = () => {
  return (
    <div
      style={{        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'        
      }}
    >
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics title={data.title} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
