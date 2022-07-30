let data = [
  {
    name: "Alan Sherer",
    hint: "260 goals-Southampton, Blackburn, Newcastle ",
  },
  {
    name: "Wayne Rooney",
    hint: "208 Goals- Everton,manchesterUnited ",
  },
  {
    name: "Andrew Cole",
    hint: "187 goals - Newcastle, Manchester United, Blackburn, Fulham, Manchester City, Portsmouth, Sunderland",
  },
  {
    name: "Sergio Aguero",
    hint: "184 goals - Manchester City",
  },
  {
    name: "Frank Lampard",
    hint: "	177 goals - West Ham, Chelsea, Manchester City",
  },
  {
    name: " Thierry Henry",
    hint: "	175 goals - Arsena",
  },
  {
    name: "Harry Kane",
    hint: "	166 goals - Tottenham, Norwich	",
  },
  {
    name: "Fobbie Fowler",
    hint: "163 goals - Liverpool, Leeds, Man City, Blackburn",
  },
  {
    name: "Jermain Defoe",
    hint: "162 goals - Charlton, West Ham, Tottenham, Portsmouth, Sunderland, Bournemouth",
  },
  {
    name: "Micheal Owen",
    hint: "150 goals - Liverpool, Newcastle, Manchester United, Stoke",
    goals: 150,
  },
  {
    name: "Les Ferdinand",
    hint: "	149 goals - QPR, Newcastle, Tottenham, West Ham, Leicester, Bolton	",
    goals: 150,
  },
  {
    name: "Teddy Sheringham",
    hint: "146 goals - Nottingham Forest, Tottenham, Manchester United, Portsmouth, West Ham	",
    goals: 150,
  },
  {
    name: "Robin van Persie",
    hint: "144 goals - Arsenal, Manchester United",
    goals: 150,
  },
  {
    name: "Jimmy Floyd Hasselbaink",
    hint: "127 goals - Leeds, Chelsea, Middlesbrough, Charlton	",
    goals: 150,
  },
  {
    name: "	Robbie Keane",
    hint: "126 goals - Coventry, Leeds, Tottenham, Liverpool, West Ham, Aston Villa",
    goals: 150,
  },
  {
    name: "	Nicolas Anelka",
    hint: "125 goals - Arsenal, Liverpool, Manchester City, Bolton, Chelsea, West Brom",
    goals: 150,
  },
  {
    name: "Dwight Yorke",
    hint: "123 goals - Aston Villa, Manchester United, Blackburn, Birmingham, Sunderland",
    goals: 150,
  },
  {
    name: "	Steven Gerrard",
    hint: "120 goals - Liverpool",
    goals: 150,
  },
  {
    name: "Jamie Vardy",
    hint: "120 goals - Leicester",
    goals: 150,
  },
  {
    name: "	Romelu Lukaku",
    hint: "	116 goals - Chelsea, West Brom, Everton, Manchester United",
    goals: 150,
  },
];

// DOM handlers
const hwToPlayBtn = document.querySelector(".how-to-play-button");
const hwToPlayTxt = document.querySelector(".how-to-play-text");
const startQuiz = document.querySelector(".start-quiz");
const formInput = document.querySelector(".input");
const timer = document.querySelector("#time");
const finalResult = document.querySelector(".final-result");
const board = document.querySelector(".board");
const tabRow = document.querySelectorAll(".tRow2");
const hint = document.querySelector(".hint");
const answer = document.querySelectorAll(".answer");
const submit = document.querySelector(".submit");
const userAnswer = document.querySelector(".text");
const scoreText = document.getElementById("score");
const gameHeader = document.querySelectorAll(".dib");
const giveUpBtn = document.querySelector(".give-up");
const giveUpSec = document.querySelector(".give-up-section");
const Statustxt = document.querySelector(".show-status");
const form = document.querySelector(".input");
const score1 = document.querySelectorAll(".score-1");
const commentScore1 = document.querySelector(".comment-score-1");
const commentScore2 = document.querySelector(".comment-score-2");
const showAnswers = document.querySelector(".show-answer-btn");
const tryAgainBtn = document.querySelector(".try-again");

// All global Variable Declarations
let time = 300;
let hidden = "color";
let hidded = "color";
let acc;
let text;
let value;
let score = 0;
let toggle = false;
const newArray = [];
let intervalKey;
let parsed = 0;
// Functions

function finalComment() {
  if (parsed === 20) {
    commentScore2.textContent = "Congratulations 🔥🔥🔥🔥 ";
    tryAgainBtn.textContent = "play again";
    listing();
    showAnswers.classList.add("hide");
  }

  if (parsed < 10) {
    score1[0].style.color = score1[1].style.color = "red";
  } else {
    score1[0].style.color = score1[1].style.color = "black";
  }
}

function listing() {
  clearInterval(intervalKey);
  form.classList.add("hide");
  giveUpSec.classList.remove("hide");
  Statustxt.classList.add("hide");
}
// start Timer
const startTimer = () => {
  //   calling Timer Per second
  const tick = () => {
    // parse timer into seconds and minutes
    const minute = ` ${parseInt(time / 60)}`.padStart(2, "0");
    const second = `${time % 60}`.padStart(2, 0);
    time = time - 1;
    timer.textContent = `${minute}:${second}`;
    // stop timer
    if (time === 0) {
      timer.textContent = `00:00`;
      timer.style.color = "red";
      listing();
    }
  };
  tick();
  intervalKey = setInterval(tick, 1000);
};

// Game body
function gameBody() {
  for (let i = 0; i < [...tabRow].length; i++) {
    tabRow[i].innerHTML = "";
  }
  data.forEach((mov, i) => {
    const html = `<tr class="tRow2">
  <td class="Rank">${i + 1}</td>
  <td class="hint"> ${mov.hint}</td>
   <td class="answer">${mov.name}  <span class="marker"></span> 
  </td> 
  </tr>`;
    tabRow[0].insertAdjacentHTML("beforebegin", html);
  });
}

// Implementing the How To PLay Btn
hwToPlayBtn.addEventListener("click", () => {
  if (!toggle) {
    hwToPlayTxt.classList.remove("hidden");
  }
  toggle = !toggle;
  if (!toggle) {
    hwToPlayTxt.classList.add("hidden");
  }
});

// Implementing The Start Quiz Btn
startQuiz.addEventListener("click", () => {
  if (!toggle || toggle) {
    formInput.classList.remove("hide");
    startQuiz.classList.add("hidden");
  }
  // start Time
  startTimer();

  // show the game
  gameBody();

  // reveal give up btn
  giveUpBtn.classList.remove("hide");
});

// correct Answer index
const correctAnswerIndex = (x) => {
  return (
    x.textContent.trim().toLowerCase().split(" ")[0] ===
      text.toLowerCase().trim() ||
    x.textContent.trim().toLowerCase().split(" ")[1] ===
      text.toLowerCase().trim() ||
    x.textContent.trim().toLowerCase().split(" ")[2] ===
      text.toLowerCase().trim() ||
    x.textContent.trim().toLowerCase() === text.toLowerCase().trim()
  );
};

// validating answer
const validateAnswer = () => {};

// focus Removal
const focusRemoval = () => {
  userAnswer.addEventListener("focus", () => {
    Statustxt.style.opacity = 0;
  });
  userAnswer.blur;
};
// answer Incorrect Status
const answerIncorrectStatus = () => {
  Statustxt.style.opacity = 1;
  Statustxt.style.backgroundColor = "#fdd";
  Statustxt.textContent = `❌ Incorrect Answer ${userAnswer.value}`;
};

const alertStatusCorrect = (userInput, index) => {
  // show answer
  // showing status

  userInput[index].style.visibility = "visible";
  const markers = document.querySelectorAll(".marker");
  markers[index].textContent = "✅";
  // show status correct
  Statustxt.textContent = ` 👊 Answer correct ${userInput[index].textContent}`;
  Statustxt.style.opacity = 1;
  Statustxt.style.backgroundColor = "#e0ede0";
};
function answerAlreadyShowed(userInput, index) {
  Statustxt.textContent = `${userInput[index].textContent} has already been entered`;
  Statustxt.style.opacity = 1;
  Statustxt.style.backgroundColor = "rgb(20 23 22 / 30%)";
}
//  Score Management And answer section
const updatingScore = () => {
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    // collect the user input
    text = userAnswer.value.toLowerCase();
    // text Valid
    if (text) {
      // find text index
      const domElements = [...document.querySelectorAll(".answer")];
      const dAcc = domElements.findIndex(correctAnswerIndex);

      if (dAcc >= 0) {
        //  push DOM element into An array

        alertStatusCorrect(domElements, dAcc);

        // update score
        if (!newArray.includes(dAcc)) {
          parsed = score += 1;
          newArray.push(dAcc);
        } else {
          answerAlreadyShowed(domElements, dAcc);
        }
        if (parsed >= 0 && parsed <= 20) {
          scoreText.textContent = `${parsed}`;
          score1[0].textContent = score1[1].textContent = `${parsed}`;
        }
      } else {
        // show status  incorrect
        answerIncorrectStatus();
      }
      //  removing the Input Focus Element

      focusRemoval();
    }

    // clear Input field after each operation
    userAnswer.value = "";

    finalComment();
  });
};

updatingScore();

//The Give-up button
const giveUp = () => {
  giveUpBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // hide the UI
    listing();
    startQuiz.classList.add("hidden");
  });
};
giveUp();

// The show Answer Button
const showAnswer = () => {
  showAnswers.addEventListener("click", (e) => {
    e.preventDefault();
    const answers = document.querySelectorAll(".answer");
    [...answers].forEach((e) => (e.style.visibility = "visible"));
  });
};
showAnswer();

// const TryAgain Btn
const tryAgain = () => {
  tryAgainBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.location.reload(true);
  });
};
tryAgain();
finalComment();
