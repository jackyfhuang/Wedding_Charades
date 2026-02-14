// Wedding-related words organized by category
const wordCategories = {
    "People": [
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
        "caterer"
    ],
    "Wedding Items": [
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
        "getaway car"
    ],
    "Wedding Events": [
        "wedding",
        "ceremony",
        "reception",
        "proposal",
        "ring exchange",
        "cake cutting",
        "bouquet toss",
        "garter toss",
        "first dance",
        "father daughter dance",
        "mother son dance",
        "last dance",
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
        "honeymoon"
    ],
    "Wedding Venues & Details": [
        "aisle",
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
        "jumping the broom"
    ],
    "Dating & Romance": [
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
        "adventure"
    ],
    "Valentine's Day": [
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
        "romantic comedy"
    ],
    "Couples Activities": [
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
        "amusement park"
    ],
    "Romantic Gestures": [
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
        "gifts"
    ],
    "Relationship Milestones": [
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
        "children"
    ],
    "Romantic Items": [
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
        "dear"
    ],
    "Emotions & Feelings": [
        "love",
        "marriage",
        "couple",
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
    ],
    "Actions": [
        "kiss",
        "hug",
        "dance",
        "slow dance",
        "cheers",
        "toast",
        "music",
        "song",
        "party",
        "celebration",
        "vows"
    ]
};
  

let remainingWords = [];
let currentWord = null;
let correctCount = 0;
let incorrectCount = 0;
let selectedCategories = [];
let gameStarted = false;

const categorySelection = document.getElementById('categorySelection');
const gameContainer = document.getElementById('gameContainer');
const wordDisplay = document.getElementById('wordDisplay');
const newWordBtn = document.getElementById('newWordBtn');
const resetBtn = document.getElementById('resetBtn');
const wordCount = document.getElementById('wordCount');
const scoreButtons = document.getElementById('scoreButtons');
const correctBtn = document.getElementById('correctBtn');
const incorrectBtn = document.getElementById('incorrectBtn');
const correctCountDisplay = document.getElementById('correctCount');
const incorrectCountDisplay = document.getElementById('incorrectCount');
const startGameBtn = document.getElementById('startGameBtn');
const selectAllBtn = document.getElementById('selectAllBtn');
const deselectAllBtn = document.getElementById('deselectAllBtn');

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

// Get words from selected categories
function getWordsFromCategories(categories) {
    let words = [];
    categories.forEach(category => {
        if (wordCategories[category]) {
            words = words.concat(wordCategories[category]);
        }
    });
    return words;
}

// Initialize category selection UI
function initializeCategorySelection() {
    const categoryContainer = document.getElementById('categoryCheckboxes');
    categoryContainer.innerHTML = '';
    
    Object.keys(wordCategories).forEach(category => {
        const label = document.createElement('label');
        label.className = 'category-checkbox';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = category;
        checkbox.checked = true; // Default to all selected
        checkbox.addEventListener('change', updateSelectedCategories);
        
        const span = document.createElement('span');
        span.textContent = `${category} (${wordCategories[category].length})`;
        
        label.appendChild(checkbox);
        label.appendChild(span);
        categoryContainer.appendChild(label);
    });
    
    updateSelectedCategories();
}

// Update selected categories
function updateSelectedCategories() {
    const checkboxes = document.querySelectorAll('#categoryCheckboxes input[type="checkbox"]');
    selectedCategories = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    // Update start button state
    startGameBtn.disabled = selectedCategories.length === 0;
    if (selectedCategories.length === 0) {
        startGameBtn.textContent = 'Select at least one category';
    } else {
        startGameBtn.textContent = `Start Game (${getWordsFromCategories(selectedCategories).length} words)`;
    }
}

// Select all categories
function selectAllCategories() {
    const checkboxes = document.querySelectorAll('#categoryCheckboxes input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = true);
    updateSelectedCategories();
}

// Deselect all categories
function deselectAllCategories() {
    const checkboxes = document.querySelectorAll('#categoryCheckboxes input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);
    updateSelectedCategories();
}

// Start the game with selected categories
function startGame() {
    if (selectedCategories.length === 0) {
        alert('Please select at least one category!');
        return;
    }
    
    gameStarted = true;
    remainingWords = shuffleArray(getWordsFromCategories(selectedCategories));
    currentWord = null;
    correctCount = 0;
    incorrectCount = 0;
    
    // Hide category selection, show game
    categorySelection.style.display = 'none';
    gameContainer.style.display = 'block';
    
    wordDisplay.innerHTML = '<p>Click "Get Word" to start!</p>';
    scoreButtons.style.display = 'none';
    updateWordCount();
    updateScore();
}

// Reset the game (go back to category selection)
function resetGame() {
    gameStarted = false;
    categorySelection.style.display = 'block';
    gameContainer.style.display = 'none';
    initializeCategorySelection();
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
startGameBtn.addEventListener('click', startGame);
selectAllBtn.addEventListener('click', selectAllCategories);
deselectAllBtn.addEventListener('click', deselectAllCategories);

// Initialize
initializeCategorySelection();
