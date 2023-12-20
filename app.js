// constant variable
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 2;

playerLivesCount.textContent = playerLives;

// grab the images and store them in a array of objects
const getData = () => [
  { imgSrc: "./images/cat1.png", name: "cat 1" },
  { imgSrc: "./images/cat2.png", name: "cat 2" },
  { imgSrc: "./images/cat3.png", name: "cat 3" },
  { imgSrc: "./images/cat1.png", name: "cat 1" },
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
    card.setAttribute("name", item.name);
    //arranging the div
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCard(e);
    });
  });
};

const checkCard = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      // flipping the cards back
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        restart("Try again");
      }
    }
  }

  if (toggleCard.length === 6) {
    restart("yay !!! you won");
  }
};

const restart = (text) => {
  let cardData = randomize();
  let face = document.querySelectorAll(".face");
  let card = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    card[index].classList.remove("toggleCard");
    //randomize again
    setTimeout(() => {
      card[index].style.pointerEvents = "all";
      face[index].src = item.imgSrc;
      card[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  playerLives = 2;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => window.alert(text), 100);
};

cardGenerator();
