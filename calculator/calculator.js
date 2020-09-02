const divContainer = document.createElement('div');
divContainer.className = 'calculator__container';
const output = document.createElement('output');
output.className = 'output';

document.body.append(divContainer);
divContainer.appendChild(output);

const divCalculator = document.createElement('div');
divCalculator.classList.add('keyboard');
document.querySelector('.calculator__container').appendChild(divCalculator);

'C CE % / 7 8 9 * 4 5 6 - 1 2 3 + ( ) 0 ='.split(' ')
  .map(symbol => {
    divCalculator.insertAdjacentHTML('beforeend', `<button value="${symbol}">${symbol}</button>`)
  });

divCalculator.addEventListener('click', click => {
  if (click.target.tagName === 'BUTTON') {
    calc(click.target.value);
  }
});

document.addEventListener('keydown', e => {
  if ((e.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) calc(e.key);
});

function calc(value) {
  if (value.match(/=|Enter/)) {
    try {
      if (output.textContent !== '') {
        output.textContent = Math.trunc(math.evaluate(output.textContent));
      }
    } catch {
        let oldValue = output.textContent;
        let newValue = 'недопустимое выражение';

        output.textContent = newValue;
        const timer = setTimeout(() => {
          output.textContent = oldValue;
          clearTimeout(timer);
        }, 1500);
    }
  } else if (value === 'C') {
    output.textContent = '';
  } else if (value.match(/CE|Backspace/)) {
    output.textContent = output.textContent.substring(0, output.textContent.length - 1);
  } else if (output.textContent.length < 26) {
    output.textContent += value;
  } else {
    output.textContent = 'много символов';
  }
}
