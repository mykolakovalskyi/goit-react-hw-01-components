import PropTypes from 'prop-types';

import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    {isOnline ? (
      <span className={css.statusIsOnline}></span>
    ) : (
      <span className={css.statusIsOfline}></span>
    )}

    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
