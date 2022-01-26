const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

const blurring = function () {
  load += 1;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

  // map a range of numbers to another range of numbers
  function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }
};

let int = setInterval(blurring, 30);
