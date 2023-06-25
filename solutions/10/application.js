import escapeHtml from 'escape-html';

const escape = () => {
    function submitFunc(e) {
        e.preventDefault();
      
        const form = e.target;
        const email = escapeHtml(form.elements.email.value);
        const name = escapeHtml(form.elements.name.value);
        const comment = escapeHtml(form.elements.comment.value);
      
        const feedbackElement = document.createElement('div');
        const feedbackContent = `
          <p>Feedback has been sent</p>
          <div>Email: ${email}</div>
          <div>Name: ${name}</div>
          <div>Comment: ${comment}</div>
        `;
        feedbackElement.innerHTML = feedbackContent;
      
        form.parentNode.replaceChild(feedbackElement, form);
    }
    
    const form = document.querySelector('form');
    form.addEventListener('submit', submitFunc);
}

export default escape;