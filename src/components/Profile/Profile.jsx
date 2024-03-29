import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.card}>
      <div className={css.container}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.text}>{tag}</p>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.menu}>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
