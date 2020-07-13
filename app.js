// const ul = document.body.firstElementChild.nextElementSibling;
// const firstLi = ul.firstElementChild;

// console.log(firstLi);

// const section = document.querySelector('section');
// const button = document.querySelector('button');

// // section.style.backgroundColor = 'blue';
// section.className = 'red-bg';

// button.addEventListener('click', () => {
//   // if (section.className === 'red-bg visible') {
//   //   section.className = 'red-bg invisible';
//   // } else {
//   //   section.className = 'red-bg visible';
//   // }

//   // section.classList.toggle('visible');
//   section.classList.toggle('invisible');
// });


const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

function printMessage() {
  const value = messageInput.value;

  document.getElementById('user').innerHTML = `Hello there, ${value}`
}

clickableBtn.addEventListener('click', printMessage);