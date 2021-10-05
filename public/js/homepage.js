const commentHandler = (event) => {
  console.log(event.target.dataset)
  const formId =  event.target.dataset.formId;
  const commentId = event.target.dataset.commentId;
  const blog_post_id = event.target.dataset.id;

  const commentForm = document.getElementById(formId);
  commentForm.style.display = 'block';
  
  commentForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const body = document.getElementById(commentId).value.trim();
    console.log(body)

    if (body) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ body, blog_post_id }),
        headers: { 'Content-Type': 'application/json '},
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to post comment.')
      }
    }
  })
};


document
.querySelectorAll('.comment-button')
.forEach(button => button.addEventListener('click', commentHandler));

