// Sample initial flashcards
let flashcards = [
  { question: "What is the capital of Ghana?", answer: "Accra" },
  { question: "What process do plants use to make food?", answer: "Photosynthesis" }
];

let currentIndex = 0;
let showingAnswer = false;

// DOM Elements
const cardText = document.getElementById('cardText');
const prevBtn = document.getElementById('prevBtn');
const toggleBtn = document.getElementById('toggleBtn');
const nextBtn = document.getElementById('nextBtn');
const addBtn = document.getElementById('addBtn');
const questionInput = document.getElementById('questionInput');
const answerInput = document.getElementById('answerInput');

// Display current flashcard
function updateCard() {
  if (flashcards.length === 0) {
    cardText.textContent = "No flashcards available. Add one below!";
    return;
  }
  
  const currentCard = flashcards[currentIndex];
  if (showingAnswer) {
    cardText.textContent = currentCard.answer;
    toggleBtn.textContent = "Show Question";
  } else {
    cardText.textContent = currentCard.question;
    toggleBtn.textContent = "Show Answer";
  }
}

// Event Listeners
toggleBtn.addEventListener('click', () => {
  showingAnswer = !showingAnswer;
  updateCard();
});

nextBtn.addEventListener('click', () => {
  if (flashcards.length > 0) {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showingAnswer = false;
    updateCard();
  }
});

prevBtn.addEventListener('click', () => {
  if (flashcards.length > 0) {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    showingAnswer = false;
    updateCard();
  }
});

addBtn.addEventListener('click', () => {
  const qText = questionInput.value.trim();
  const aText = answerInput.value.trim();

  if (qText === "" || aText === "") {
    alert("Please fill in both the question and answer!");
    return;
  }

  flashcards.push({ question: qText, answer: aText });
  questionInput.value = "";
  answerInput.value = "";
  currentIndex = flashcards.length - 1; // Jump to the new card
  showingAnswer = false;
  updateCard();
  alert("Flashcard added successfully!");
});

// Initial load
updateCard();