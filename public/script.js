document.querySelector('.form-button-submit').addEventListener('click', event => {
  event.preventDefault();
  console.log('NAME: ', document.querySelector('.form-input-name').value);
  console.log('COLOR: ', document.querySelector('.form-input-favorite-color').value);
  document.querySelector('.form-input-name').value = '';
  document.querySelector('.form-input-favorite-color').value = '';
});