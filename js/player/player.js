const syncState = (player, element) => {
  element.classList.toggle(`player--is-playing`, !player.paused);
};


const switchState = (state, player, element) => {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }

  syncState(player, element);
};


const destroyPlayer = (element, state) => {
  const player = element.querySelector(`audio`);
  const button = element.querySelector(`button`);

  player.src = null;
  button.onclick = null;
  element.innerHTML = ``;
  state = null;

  return true;
};


const initializePlayer = (element, file, autoplay = true) => {
  let state = {};

  const content = document.querySelector(`template`)
    .content
    .querySelector(`.player`)
    .cloneNode(true);
  const player = content.querySelector(`audio`);
  const button = content.querySelector(`.player-control`);

  player.onloadeddata = () => {

    button.onclick = () => {
      event.preventDefault();
      switchState(state, player, content);
    };
    if (autoplay) {
      switchState(state, player, content);
    }
  };

  player.src = file;
  element.appendChild(content);

  return () => destroyPlayer(element, state);
};

export default initializePlayer;
