const getRandomScreenName = () => {
  return Math.random() > 0.5 ? `question-artist` : `question-genre`;
};

export default getRandomScreenName;
