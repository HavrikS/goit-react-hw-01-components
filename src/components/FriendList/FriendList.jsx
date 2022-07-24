import PropTypes from "prop-types";
import { FriendListItem } from 'components/FriendListItem/FriendListItem'
import { object } from "prop-types";
import css from './FriendList.module.css'

export const FriendList = ({friends}) => {  
    return (
        <ul className={css.friendList}>
            {friends.map(friend => (
                        <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
                    ))}            
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(object).isRequired
};