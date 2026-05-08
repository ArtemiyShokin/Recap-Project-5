export default function CommentForm({ onSubmitComment, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    
   
    const formData = new FormData(event.target);
    const { comment } = Object.fromEntries(formData);

   
    onSubmitComment(slug, comment);

   
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} aria-label="add comments">
      <h2>Add Comment:</h2>
      <textarea
        name="comment"
        id="comment"
        rows="3"
        required
        placeholder="What do you think about this piece?"
      />
      <button type="submit">Send</button>
    </form>
  );
}