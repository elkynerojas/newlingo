// Palabras con sus significados y rutas de audio
const words = {
        "amphibian": { meaning: "A vertebrate that lives on land and in water.", audio: "audio/amphibian.mp3" },
        "glucose": { meaning: "A simple sugar, primary energy source.", audio: "audio/glucose.mp3" },
        "antibody": { meaning: "A protein that fights infections.", audio: "audio/antibody.mp3" },
        "cell": { meaning: "The basic unit of life.", audio: "audio/cell.mp3" },
        "bronchus": { meaning: "A main airway branch in the lungs.", audio: "audio/bronchus.mp3" },
        "cytoplasm": { meaning: "The jelly-like substance inside a cell.", audio: "audio/cytoplasm.mp3" },
        "cholesterol": { meaning: "A lipid important for cell membranes.", audio: "audio/cholesterol.mp3" },
        "atom": { meaning: "The basic unit of matter.", audio: "audio/atom.mp3" },
        "electron": { meaning: "A negatively charged particle in an atom.", audio: "audio/electron.mp3" },
        "proton": { meaning: "A positively charged particle in an atom's nucleus.", audio: "audio/proton.mp3" },
        "neutral": { meaning: "Having no charge.", audio: "audio/neutral.mp3" },
        "core": { meaning: "The central part, often referring to the nucleus.", audio: "audio/core.mp3" },
        "orbital": { meaning: "A region where an electron is likely to be found.", audio: "audio/orbital.mp3" },
        "motion": { meaning: "The act of moving or changing position.", audio: "audio/motion.mp3" },
        "harmonic": { meaning: "Related to frequencies that are multiples of a fundamental frequency.", audio: "audio/harmonic.mp3" },
        "magnitude": { meaning: "The size or extent of something.", audio: "audio/magnitude.mp3" },
        "oscillatory": { meaning: "Involving repeated back-and-forth movement.", audio: "audio/oscillatory.mp3" },
        "vibratory": { meaning: "Relating to vibration or rapid movement.", audio: "audio/vibratory.mp3" },
        "acoustics": { meaning: "The study of sound and its properties.", audio: "audio/acoustics.mp3" },
        "speed": { meaning: "The rate at which something moves or travels.", audio: "audio/speed.mp3" }
};

// Función para obtener una palabra aleatoria
function getRandomWord() {
    const keys = Object.keys(words);
    return keys[Math.floor(Math.random() * keys.length)];
}

// Función para reproducir el audio de una palabra
function playWordAudio(word) {
    const audioElement = document.getElementById('audio-word');
    const audioSource = document.getElementById('audio-source');
    audioSource.src = words[word].audio;
    audioElement.load();
    audioElement.play();
}



// Función para cargar una nueva palabra
function loadNewWord() {
    currentSpellingWord = getRandomWord();
    playWordAudio(currentSpellingWord);
    document.getElementById('spelling-input').value = ''; // Limpiar el input
    document.getElementById('spelling-result').textContent = ''; // Limpiar el resultado
}

// Palabra actual en la sección de Ortografía
let currentSpellingWord = getRandomWord();
loadNewWord(); // Cargar la primera palabra y su audio

// Verificar la ortografía
document.getElementById('check-spelling-btn').addEventListener('click', () => {
    const userInput = document.getElementById('spelling-input').value.toLowerCase();
    if (userInput === currentSpellingWord) {
        //document.getElementById('spelling-result').textContent = "Correct!";
        alert("Your spelling is correct")
        loadNewWord(); // Cargar una nueva palabra y audio
    } else {
        alert("Incorrect. Try again.")
        //document.getElementById('spelling-result').textContent = "Incorrect. Try again.";
    }
});

// Pronunciación (Reconocimiento de voz)
const pronunciationWordElement = document.getElementById('word-to-pronounce');
let currentPronunciationWord = getRandomWord();
pronunciationWordElement.textContent = currentPronunciationWord;

document.getElementById('start-record-btn').addEventListener('click', () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = (event) => {
        const spokenWord = event.results[0][0].transcript.toLowerCase();
        if (spokenWord === currentPronunciationWord) {
            //document.getElementById('pronunciation-result').textContent = "Well done!";
            alert("Well done! Try with the next word")
            currentPronunciationWord = getRandomWord();
            pronunciationWordElement.textContent = currentPronunciationWord;
        } else {
            alert("Try Again! Yo can do it")
            //document.getElementById('pronunciation-result').textContent = "Try again!";
        }
    };
});

// Búsqueda de significados
document.getElementById('find-meaning-btn').addEventListener('click', () => {
    const word = document.getElementById('meaning-input').value.toLowerCase();
    const meaningResult = document.getElementById('meaning-result');
    if (words[word]) {
        meaningResult.textContent = words[word].meaning;
    } else {
        meaningResult.textContent = "Word not found.";
    }
});
