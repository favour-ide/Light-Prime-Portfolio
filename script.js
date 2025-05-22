<script>
// COMMENTS SECTION LOGIC
document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.getElementById('comment-form');
  const commentList = document.getElementById('comment-list');

  if (commentForm) {
    commentForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = document.getElementById('comment-input');
      const text = input.value.trim();

      if (text) {
        const div = document.createElement('div');
        div.className = 'comment';
        div.innerHTML = `
          <span>${text}</span>
          <button onclick="this.parentElement.remove()">Delete</button>
        `;
        commentList.appendChild(div);
        input.value = '';
      }
    });
  }
});
</script>
