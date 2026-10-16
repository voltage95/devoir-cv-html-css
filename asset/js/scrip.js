const form = document.querySelector('#comment-form');
const nameInput = document.querySelector('#name-input');
const commentInput = document.querySelector('#comment-input');
const errorBox = document.querySelector('#error-message');
const commentsList = document.querySelector('#comments-list');

function showError(msg){ errorBox.textContent = msg; errorBox.classList.remove('hidden'); }
function hideError(){ errorBox.textContent = ''; errorBox.classList.add('hidden'); }

function createCommentElement(author, text){
  const article = document.createElement('article');
  article.className = 'comment-card';
  const strong = document.createElement('strong');
  strong.className = 'comment-author'; strong.textContent = author;
  const p = document.createElement('p');
  p.className = 'comment-text'; p.textContent = text;
  const btn = document.createElement('button');
  btn.className = 'btn-delete'; btn.textContent = '🗑️ Supprimer';
  btn.addEventListener('click', function(){ article.remove(); });
  article.appendChild(strong); article.appendChild(p); article.appendChild(btn);
  return article;
}

document.querySelectorAll('.btn-delete').forEach(btn=>{
  btn.addEventListener('click', ()=>{ btn.closest('.comment-card').remove(); });
});

form.addEventListener('submit', function(e){
  e.preventDefault(); hideError();
  const nameVal = nameInput.value.trim();
  const comVal = commentInput.value.trim();
  if(nameVal.length < 2){ showError('Le nom doit contenir au moins 2 caractères.'); return; }
  if(comVal.length < 10){ showError('Le commentaire doit contenir au moins 10 caractères.'); return; }
  const newComment = createCommentElement(nameVal, comVal);
  commentsList.prepend(newComment);
  form.reset();
});