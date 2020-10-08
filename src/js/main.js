const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#F08080',
  '#DC143C',
  '#98FB98',
  '#48D1CC',
  '#FFFF00',
  '#191970',
  '#FF00FF',
  '#2F4F4F',
];

const refs = {
  startBtnRef: document.querySelector('[data-action="start"]'),
  stopBtnRef: document.querySelector('[data-action="stop"]'),
  currentColorRef: document.querySelector('.current-color'),
};

const background = {
  intervalId: null,
  isActivBtn: false,

  start() {
    if (this.isActivBtn) {
      return;
    }

    this.isActivBtn = true;
    refs.currentColorRef.textContent = 'Стартую событие...';

    setTimeout(() => {
      this.intervalId = setInterval(() => {
        document.body.setAttribute(
          'style',
          `background: ${randomColors(colors)}`,
        );
        refs.currentColorRef.textContent = randomColors(colors);
      }, 1000);
    }, 1000);
  },

  stop() {
    refs.currentColorRef.textContent = 'Показ закончен!';
    clearInterval(this.intervalId);
    this.isActivBtn = false;
  },
};

refs.startBtnRef.addEventListener('click', background.start.bind(background));
refs.stopBtnRef.addEventListener('click', background.stop.bind(background));

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColors(colors) {
  const indexColor = randomIntegerFromInterval(0, colors.length - 1);
  return colors[indexColor];
}
