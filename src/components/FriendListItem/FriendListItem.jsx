import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  const amountClasses = clsx(isOnline ? css.online : css.offline);
  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
      <p className={amountClasses}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
