// λ¬΄λ£ κ°μ π https://youtube.com/playlist?list=PLI33CnBTx2MZGD7zAQ810_B8dDU_E8gaq
// μ΄ μλ μ½λλ₯Ό μμ±νμΈμ.

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (input.value !== '') {
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = '';
  }
});
