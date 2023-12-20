// constant variable
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 3;

playerLivesCount.textContent = playerLives;

// grab the images and store them in a array of objects
const getData = () => [
  { imgSrc: "./images/cat1.jpeg", name: "cat 1" },
  { imgSrc: "./images/cat2.png", name: "cat 2" },
  { imgSrc: "./images/cat3.png", name: "cat 3" },
  { imgSrc: "./images/cat1.jpeg", name: "cat 1" },
  { imgSrc: "./images/cat2.png", name: "cat 2" },
  { imgSrc: "./images/cat3.png", name: "cat 3" },
];

// randomizing the card

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

//  generating card

const cardGenerator = () => {
  const cardData = randomize();

  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    // Attach image
    face.src = item.imgSrc;

    //arranging the div
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
  });
};

cardGenerator();
