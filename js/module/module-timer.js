import getElementFromTemplate from '../utils/get-element-from-template';
import renderScreen from '../utils/render-screen';


const app = document.querySelector(`.app`);
const templateTimer = () => `
  <div class="main-timer">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle cx="390" cy="390" r="370" class="timer-line" style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
    </svg>

    <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer-value-mins">02</span><!--
      --><span class="timer-value-dots">:</span><!--
      --><span class="timer-value-secs">00</span>
    </div>
  </div>
`;

const renderTimer = function (element) {
  app.appendChild(element);
};

const destroyTimer = function () {
  app.removeChild(app.querySelector('.main-timer'))
};

const initTimer = function () {
  renderTimer(getElementFromTemplate(templateTimer()));
};

const timer = {
  init: initTimer,
  destroy: destroyTimer
}

export default timer
