import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const email = document.querySelector('[name = "email"]');
const message = document.querySelector('[name = "message"]');

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onFormSubmit);
window.addEventListener('load', () => {
  saveLocalRef();
});
const emptyArr = {};

// Записуємо у локальне сховище
function onInputForm(e) {
  emptyArr[e.target.name] = e.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(emptyArr));
}

// Сабміт форми
function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function saveLocalRef(e) {
  const saveMessage = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (saveMessage.email) {
    email.value = saveMessage.email;
    if (saveMessage.message) {
      message.value = saveMessage.message;
    }
  }
}
