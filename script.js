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
    "bridesmaid",
    "groomsman",
    "flower girl",
    "ring bearer",
    "officiant",
    "pastor",
    "priest",
    "minister",
    "wedding planner",
    "photographer",
    "videographer",
    "dj",
    "band",
    "caterer",
  
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
    "wedding cake",
    "cake",
    "dessert",
    "cupcakes",
    "garter",
    "wedding favors",
    "guest book",
    "centerpiece",
    "table setting",
    "place cards",
    "seating chart",
    "wedding arch",
    "altar",
    "aisle runner",
    "unity candle",
    "limousine",
    "getaway car",
  
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
    "garter toss",
    "cheers",
    "toast",
    "wedding",
    "ceremony",
    "reception",
    "aisle",
    "music",
    "song",
    "party",
    "celebration",
    "vows",
    "send off",
    "sparklers",
    "confetti",
    "bubbles",
    "bird seed",
    "wedding night",
    "engagement",
    "engagement ring",
    "engagement party",
    "bridal shower",
    "bachelor party",
    "bachelorette party",
    "rehearsal dinner",
    "wedding planning",
    "honeymoon",
    "father daughter dance",
    "mother son dance",
    "last dance",
  
    // Ceremony & reception
    "venue",
    "chapel",
    "church",
    "garden",
    "beach wedding",
    "destination wedding",
    "wedding party",
    "reception hall",
    "ballroom",
    "banquet",
    "buffet",
    "dinner",
    "appetizers",
    "entree",
    "main course",
    "photo booth",
    "dance floor",
    "sand ceremony",
    "wine ceremony",
    "handfasting",
    "jumping the broom",
  
    // Emotions & themes
    "love",
    "marriage",
    "couple",
  
    // Dating & Romance
    "date",
    "first date",
    "dinner date",
    "movie date",
    "coffee date",
    "romantic dinner",
    "candlelit dinner",
    "stargazing",
    "sunset",
    "sunrise",
    "walk in the park",
    "picnic",
    "beach walk",
    "holding hands",
    "cuddling",
    "snuggling",
    "romantic getaway",
    "weekend trip",
    "road trip",
    "adventure",
  
    // Valentine's Day
    "valentine",
    "valentine's day",
    "cupid",
    "heart",
    "hearts",
    "arrow",
    "chocolate",
    "chocolates",
    "candy hearts",
    "conversation hearts",
    "roses",
    "red roses",
    "rose petals",
    "love letter",
    "love note",
    "card",
    "valentine card",
    "romantic card",
    "teddy bear",
    "stuffed animal",
    "romantic movie",
    "romantic comedy",
  
    // Couples Activities
    "cooking together",
    "baking together",
    "dancing",
    "singing together",
    "karaoke",
    "game night",
    "board game",
    "puzzle",
    "netflix and chill",
    "couples massage",
    "spa day",
    "hiking together",
    "camping together",
    "museum date",
    "art gallery",
    "concert",
    "live music",
    "theater",
    "comedy show",
    "festival",
    "amusement park",
  
    // Romantic Gestures
    "surprise",
    "surprise party",
    "gift giving",
    "breakfast in bed",
    "love song",
    "serenade",
    "poem",
    "poetry",
    "compliment",
    "flirting",
    "wink",
    "smile",
    "laugh",
    "joke",
    "teasing",
    "playful",
    "romantic gesture",
    "love language",
    "quality time",
    "acts of service",
    "words of affirmation",
    "physical touch",
    "gifts",
  
    // Relationship Milestones
    "anniversary",
    "first kiss",
    "first meeting",
    "first conversation",
    "first text",
    "first phone call",
    "moving in together",
    "meeting the parents",
    "meeting the family",
    "first home",
    "pets",
    "dog",
    "cat",
    "baby",
    "children",
  
    // More Romantic Items
    "perfume",
    "cologne",
    "jewelry",
    "necklace",
    "bracelet",
    "earrings",
    "watch",
    "locket",
    "photo frame",
    "picture",
    "scrapbook",
    "memory book",
    "love story",
    "inside joke",
    "nickname",
    "pet name",
    "sweetheart",
    "darling",
    "honey",
    "babe",
    "sweetie",
    "dear",
  
    // More Actions & Emotions
    "romance",
    "passion",
    "affection",
    "devotion",
    "commitment",
    "trust",
    "respect",
    "understanding",
    "support",
    "comfort",
    "security",
    "happiness",
    "joy",
    "bliss",
    "euphoria",
    "butterflies",
    "crush",
    "infatuation",
    "attraction",
    "chemistry",
    "connection",
    "bond",
    "partnership",
    "team",
    "soulmate",
    "better half",
    "other half",
    "companion",
    "partner",
    "spouse",
    "fiance",
    "fiancee",
    "boyfriend",
    "girlfriend",
    "significant other"
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
