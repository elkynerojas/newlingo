// scripts/tools.js

const words = [
    { word: "amphibian", audio: "audio/amphibian.mp3", meaning: "A vertebrate that lives on land and in water." },
    { word: "glucose", audio: "audio/glucose.mp3", meaning: "A simple sugar, primary energy source." },
    { word: "antibody", audio: "audio/antibody.mp3", meaning: "A protein that fights infections." },
    { word: "cell", audio: "audio/cell.mp3", meaning: "The basic unit of life." },
    { word: "bronchus", audio: "audio/bronchus.mp3", meaning: "A main airway branch in the lungs." },
    { word: "cytoplasm", audio: "audio/cytoplasm.mp3", meaning: "The jelly-like substance inside a cell." },
    { word: "cholesterol", audio: "audio/cholesterol.mp3", meaning: "A lipid important for cell membranes." },
    { word: "atom", audio: "audio/atom.mp3", meaning: "The basic unit of matter." },
    { word: "electron", audio: "audio/electron.mp3", meaning: "A negatively charged particle in an atom." },
    { word: "proton", audio: "audio/proton.mp3", meaning: "A positively charged particle in an atom's nucleus." },
    { word: "neutral", audio: "audio/neutral.mp3", meaning: "Having no charge." },
    { word: "core", audio: "audio/core.mp3", meaning: "The central part, often referring to the nucleus." },
    { word: "orbital", audio: "audio/orbital.mp3", meaning: "A region where an electron is likely to be found." },
    { word: "motion", audio: "audio/motion.mp3", meaning: "The act of moving or changing position." },
    { word: "harmonic", audio: "audio/harmonic.mp3", meaning: "Related to frequencies that are multiples of a fundamental frequency." },
    { word: "magnitude", audio: "audio/magnitude.mp3", meaning: "The size or extent of something." },
    { word: "oscillatory", audio: "audio/oscillatory.mp3", meaning: "Involving repeated back-and-forth movement." },
    { word: "vibratory", audio: "audio/vibratory.mp3", meaning: "Relating to vibration or rapid movement." },
    { word: "acoustics", audio: "audio/acoustics.mp3", meaning: "The study of sound and its properties." },
    { word: "speed", audio: "audio/speed.mp3", meaning: "The rate at which something moves or travels." }
];

let currentWord = getRandomWord();
let currentSpellingWord = getRandomWord();

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function updatePronunciationSection() {
    document.getElementById('audio-source').src = currentWord.audio;
    document.getElementById('word-to-pronounce').textContent = currentWord.word;
}

function updateSpellingSection() {
    document.getElementById('spelling-audio-source').src = currentSpellingWord.audio;
    document.getElementById('spelling-word').textContent = currentSpellingWord.word;
}



function startRecording() {
    if (!('webkitSpeechRecognition' in window)) {
        alert('Speech recognition not supported in this browser.');
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
        const spokenWord = event.results[0][0].transcript.trim().toLowerCase();
        if (spokenWord === currentWord.word) {
            document.getElementById('pronunciation-result').textContent = "Correct!";
            currentWord = getRandomWord();
            updatePronunciationSection();
            document.getElementById('pronunciation-input').value = ''; // Limpiar el input
        } else {
            document.getElementById('pronunciation-result').textContent = "Incorrect. Try again.";
        }
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };

    recognition.start();
}

document.getElementById('start-record-btn').addEventListener('click', () => {
    startRecording();
});

document.getElementById('check-pronunciation-btn').addEventListener('click', () => {
    const userInput = document.getElementById('pronunciation-input').value.trim().toLowerCase();
    if (userInput === currentWord.word) {
        document.getElementById('pronunciation-result').textContent = "Correct!";
        currentWord = getRandomWord();
        updatePronunciationSection();
        document.getElementById('pronunciation-input').value = ''; // Limpiar el input
    } else {
        document.getElementById('pronunciation-result').textContent = "Incorrect. Try again.";
    }
});

document.getElementById('check-spelling-btn').addEventListener('click', () => {
    const userInput = document.getElementById('spelling-input').value.trim().toLowerCase();
    if (userInput === currentSpellingWord.word) {
        document.getElementById('spelling-result').textContent = "Correct!";
        currentSpellingWord = getRandomWord();
        updateSpellingSection();
        document.getElementById('spelling-input').value = ''; // Limpiar el input
    } else {
        document.getElementById('spelling-result').textContent = "Incorrect. Try again.";
    }
});

function showTools() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('tools-page').style.display = 'block';
    updatePronunciationSection();
    updateSpellingSection();
    updateReviewSection();
    updateReviewAllSection();
}
