function toggleText() {
  let text = document.querySelector('#text');
  let button = document.querySelector('.toggle-text-button').addEventListener('click', () => {
    text.hidden = !text.hidden;
  });
}
