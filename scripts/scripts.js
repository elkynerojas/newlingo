const words = {
    "ei-em-phi-bi-en": { meaning: "A vertebrate that lives on land and in water.", audio: "audio/ei-em-phi-bi-en.mp3" },
    "ji-el-you-see-ou-es-ee": { meaning: "A simple sugar, primary energy source.", audio: "audio/ji-el-you-see-ou-es-ee.mp3" },
    "ei-en-ti-ai-bi-ou-di-why": { meaning: "A protein that fights infections.", audio: "audio/ei-en-ti-ai-bi-ou-di-why.mp3" },
    "si-ee-el-el": { meaning: "The basic unit of life.", audio: "audio/si-ee-el-el.mp3" },
    "bi-ar-ou-en-si-eich-you-es": { meaning: "A main airway branch in the lungs.", audio: "audio/bi-ar-ou-en-si-eich-you-es.mp3" },
    "si-wai-ti-ou-pi-el-ei-es-em": { meaning: "The jelly-like substance inside a cell.", audio: "audio/si-wai-ti-ou-pi-el-ei-es-em.mp3" },
    "si-eich-ou-el-ee-es-ti-ar-ou-el": { meaning: "A lipid important for cell membranes.", audio: "audio/si-eich-ou-el-ee-es-ti-ar-ou-el.mp3" },
    "ei-ti-ou-em": { meaning: "The basic unit of matter.", audio: "audio/ei-ti-ou-em.mp3" },
    "i-el-ee-si-ti-ar-ou-en": { meaning: "A negatively charged particle in an atom.", audio: "audio/i-el-ee-si-ti-ar-ou-en.mp3" },
    "pi-ar-ou-ti-ou-en": { meaning: "A positively charged particle in an atom's nucleus.", audio: "audio/pi-ar-ou-ti-ou-en.mp3" },
    "en-ee-you-ti-ar-ei-el": { meaning: "Having no charge.", audio: "audio/en-ee-you-ti-ar-ei-el.mp3" },
    "si-ou-ar-ee": { meaning: "The central part, often referring to the nucleus.", audio: "audio/si-ou-ar-ee.mp3" },
    "ou-ar-bi-ai-ti-ei-el": { meaning: "A region where an electron is likely to be found.", audio: "audio/ou-ar-bi-ai-ti-ei-el.mp3" },
    "em-ou-ti-ai-ou-en": { meaning: "The act of moving or changing position.", audio: "audio/em-ou-ti-ai-ou-en.mp3" },
    "eich-ei-ar-em-ou-en-ai-si": { meaning: "Related to frequencies that are multiples of a fundamental frequency.", audio: "audio/eich-ei-ar-em-ou-en-ai-si.mp3" },
    "em-ei-ji-en-ai-ti-you-di-ee": { meaning: "The size or extent of something.", audio: "audio/em-ei-ji-en-ai-ti-you-di-ee.mp3" },
    "audio/ou-es-si-ai-el-el-ei-ti-ou-ar": { meaning: "Involving repeated back-and-forth movement.", audio: "audio/ou-es-si-ai-el-el-ei-ti-ou-ar-why.mp3" },
    "vi-ai-bi-ar-ei-ti-ou-ar-why": { meaning: "Relating to vibration or rapid movement.", audio: "audio/vi-ai-bi-ar-ei-ti-ou-ar-why.mp3" },
    "ei-si-ou-you-es-ti-ai-si-es": { meaning: "The study of sound and its properties.", audio: "audio/ei-si-ou-you-es-ti-ai-si-es.mp3" },
    "es-pi-ee-ee-di": { meaning: "The rate at which something moves or travels.", audio: "audio/es-pi-ee-ee-di.mp3" },
    "ti-ee-ei-si-eich": { meaning: "The act of instructing or educating.", audio: "audio/ti-ee-ei-si-eich.mp3" },
    "ee-pi-ai-di-ee-em-ai-si": { meaning: "A widespread occurrence of disease.", audio: "audio/ee-pi-ai-di-ee-em-ai-si.mp3" },
    "el-ai-vi-ee-ar": { meaning: "An organ that processes nutrients and detoxifies.", audio: "audio/el-ai-vi-ee-ar.mp3" },
    "eich-wai-es-es-ou-pi": { meaning: "A plant used in traditional medicine and rituals.", audio: "audio/eich-wai-es-es-ou-pi.mp3" },
    "ei-ti-ou-em-ai-si-em-ei-es-es": { meaning: "The mass of an atom, mostly from protons and neutrons.", audio: "audio/ei-ti-ou-em-ai-si-em-ei-es-es.mp3" },
    "ei-ti-ou-em-ai-si-en-you-em-bi-ee-ar": { meaning: "The number of protons in an atom's nucleus.", audio: "audio/ei-ti-ou-em-ai-si-en-you-em-bi-ee-ar.mp3" },
    "i-el-ee-si-ti-ar-ou-en-ai-si-kon-fi-gi-ou-rei-shon": { meaning: "The arrangement of electrons in an atom.", audio: "audio/i-el-ee-si-ti-ar-ou-en-ai-si-kon-fi-gi-ou-rei-shon.mp3" },
    "pi-ei-ar-ei-bi-ou-el-ai-si": { meaning: "Shaped like a parabola; describes certain types of paths or curves.", audio: "audio/pi-ei-ar-ei-bi-ou-el-ai-si.mp3" },
    "vi-ee-ar-ti-ai-si-ei-el-el-ou-en-si-eich": { meaning: "An upward movement starting from a vertical position.", audio: "audio/vi-ee-ar-ti-ai-si-ei-el-el-ou-en-si-eich.mp3" },
    "es-ou-you-en-di": { meaning: "Vibrations that travel through a medium and are heard.", audio: "audio/es-ou-you-en-di.mp3" }
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
