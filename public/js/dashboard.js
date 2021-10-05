const postFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    

    console.log(title)
    console.log(content)


  
    if (title && content) {
      const response = await fetch('/api/blogposts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to post.');
      }
    }
  };

const editPostHandler = (event) => {
  const formId = event.target.dataset.formId;
  const titleId = event.target.dataset.editTitle;
  const contentId = event.target.dataset.editContent;
  const editForm = document.getElementById(formId);

  console.log("EDIT");
  console.log(formId);
  console.log(titleId);
  console.log(contentId);
  console.log(editForm);
  console.log(event);
  
  editForm.style.display = 'block'

  editForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = document.getElementById(titleId).value.trim();
    const content = document.getElementById(contentId).value.trim();

    const response = await fetch('/api/blogposts', {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to edit post.')
    }
  });
};

const deletePostHandler = async (event) => {
  const postId = event.target.dataset.id;
  console.log(postId)
  const response = await fetch('/api/blogposts/' + postId, {
    method: 'DELETE',
    // body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' },
  })

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to post.');
  }
}

  
  
document
  .querySelector('.post-form')
  .addEventListener('submit', postFormHandler);

document
  .querySelectorAll('.edit-button')
  .forEach(button => button.addEventListener('click', editPostHandler));

document
  .querySelectorAll('.delete-button')
  .forEach(button => button.addEventListener('click', deletePostHandler));