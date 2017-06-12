import getElementFromTemplate from '../utils/get-element-from-template';
import renderScreen from '../utils/render-screen';
const templateTimer = (timeObj) => `
  <div class="main-timer">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle cx="390" cy="390" r="370" class="timer-line" style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
    </svg>

    <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer-value-mins">${window.addLeadingZero(timeObj.minutes)}</span><!--
      --><span class="timer-value-dots">:</span><!--
      --><span class="timer-value-secs">${window.addLeadingZero(timeObj.seconds)}</span>
    </div>
  </div>
`;

const app = document.querySelector(`.app`);
const timer = {};

const renderTimer = function (element) {
  app.appendChild(element);
};

const trimZero = function (sting) {
  console.log(sting)
};

const setTimeLeft = function (time) {
  timer.timeLeft = time;
};

const getTimeLeft = function () {
  timer.timeLeft -= 1;
};

timer.stop = function () {
  app.removeChild(app.querySelector('.main-timer'));
  return timer.timeLeft;
};

timer.start = function (totalTime, stopCallback) {
  const timeObj = window.formatTime(totalTime * 1000, 0)
  renderTimer(getElementFromTemplate(templateTimer(timeObj)));
  setTimeLeft(totalTime);
  window.initializeCountdown(totalTime, getTimeLeft, stopCallback);
};


export default timer
