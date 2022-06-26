const button = document.getElementById('size');
button.addEventListener('click', getPrompt);

let k = 1;

function getPrompt() {
  let size = Number(prompt('How many squares per grid?:'));
  if (size < 100) {
    if (k === 1) {
      document.getElementById('container').innerHTML = "";
    }
    document.getElementById('container').setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);
    k = 1;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
        document.getElementById('container').appendChild(square);
        square.addEventListener('mouseover', function colorSquare() {
          square.classList.add('colored');
        });
      }
    }
  }
  else {
    console.alert('The number is too big!');
  }
}