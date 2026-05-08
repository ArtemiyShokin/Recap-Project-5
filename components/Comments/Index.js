export default function Comments({ artpieceComments }) {
  return (
    <section>
      <h2>Comments</h2>
      <ul>
        {artpieceComments.map((comment, index) => (
          <li key={index}>
            <p>{comment.text}</p>
            <small>{comment.date} at {comment.time}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}