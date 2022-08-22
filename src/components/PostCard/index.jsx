import "./styles.css";

export const PostCard = ({ cover, title, body }) => {
  return (
    <div className="post">
      <img src={cover} alt="" />
      <div className="post-content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
