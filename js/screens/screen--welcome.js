import setScreen from '../controllers/set-screen';
import getElementFromTemplate from '../utils/get-element-from-template';

export default () => {
  const template = `
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
  </section>`;

  const screenWelcome = getElementFromTemplate(template);

  const playGameButton = screenWelcome.querySelector(`.main-play`);

  const onClickButton = function () {
    setScreen();
  };

  playGameButton.addEventListener(`click`, onClickButton);

  return screenWelcome;
};
