// Wedding-related words for charades
const weddingWords = [
    // People
    "bride",
    "groom",
    "husband",
    "wife",
    "newlyweds",
    "family",
    "friends",
    "best man",
  
    // Clothing & items
    "wedding dress",
    "suit",
    "veil",
    "rings",
    "bouquet",
    "flowers",
    "candles",
    "champagne",
    "gift",
    "invitation",
  
    // Actions & Events
    "kiss",
    "hug",
    "dance",
    "slow dance",
    "first dance",
    "proposal",
    "ring exchange",
    "cake cutting",
    "bouquet toss",
    "cheers",
    "toast",
  
    // Ceremony & reception
    "wedding",
    "ceremony",
    "reception",
    "aisle",
    "music",
    "song",
    "party",
    "celebration",
    "vows",
  
    // Food & fun
    "wedding cake",
    "cake",
    "dessert",
    "cupcakes",
    "photo booth",
    "dance floor",
    "honeymoon",
  
    // Emotions & themes (kept minimal)
    "love",
    "marriage",
    "couple"
  ];
  

let remainingWords = [...weddingWords];
let currentWord = null;
let correctCount = 0;
let incorrectCount = 0;

const wordDisplay = document.getElementById('wordDisplay');
const newWordBtn = document.getElementById('newWordBtn');
const resetBtn = document.getElementById('resetBtn');
const wordCount = document.getElementById('wordCount');
const scoreButtons = document.getElementById('scoreButtons');
const correctBtn = document.getElementById('correctBtn');
const incorrectBtn = document.getElementById('incorrectBtn');
const correctCountDisplay = document.getElementById('correctCount');
const incorrectCountDisplay = document.getElementById('incorrectCount');

// Shuffle array function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Get a random word
function getRandomWord() {
    if (remainingWords.length === 0) {
        wordDisplay.innerHTML = '<p>No more words! Click Reset to start over.</p>';
        scoreButtons.style.display = 'none';
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * remainingWords.length);
    currentWord = remainingWords[randomIndex];
    remainingWords.splice(randomIndex, 1);
    
    wordDisplay.innerHTML = `<p>${currentWord}</p>`;
    scoreButtons.style.display = 'flex';
    updateWordCount();
}

// Mark as correct
function markCorrect() {
    correctCount++;
    updateScore();
    getNextWord();
}

// Mark as incorrect
function markIncorrect() {
    incorrectCount++;
    updateScore();
    getNextWord();
}

// Get next word after scoring
function getNextWord() {
    if (remainingWords.length === 0) {
        wordDisplay.innerHTML = '<p>No more words! Click Reset to start over.</p>';
        scoreButtons.style.display = 'none';
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * remainingWords.length);
    currentWord = remainingWords[randomIndex];
    remainingWords.splice(randomIndex, 1);
    
    wordDisplay.innerHTML = `<p>${currentWord}</p>`;
    updateWordCount();
}

// Update score display
function updateScore() {
    correctCountDisplay.textContent = correctCount;
    incorrectCountDisplay.textContent = incorrectCount;
}

// Reset the game
function resetGame() {
    remainingWords = shuffleArray([...weddingWords]);
    currentWord = null;
    correctCount = 0;
    incorrectCount = 0;
    wordDisplay.innerHTML = '<p>Click "Get Word" to start!</p>';
    scoreButtons.style.display = 'none';
    updateWordCount();
    updateScore();
}

// Update word count display
function updateWordCount() {
    wordCount.textContent = remainingWords.length;
}

// Event listeners
newWordBtn.addEventListener('click', getRandomWord);
resetBtn.addEventListener('click', resetGame);
correctBtn.addEventListener('click', markCorrect);
incorrectBtn.addEventListener('click', markIncorrect);

// Initialize
resetGame();
