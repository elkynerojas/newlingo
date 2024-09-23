const words = {
    "amphibian": { meaning: "A vertebrate that lives on land and in water.", audio: "audio/ei-em-phi-bi-en.mp3" },
    "glucose": { meaning: "A simple sugar, primary energy source.", audio: "audio/ji-el-you-see-ou-es-ee.mp3" },
    "antibody": { meaning: "A protein that fights infections.", audio: "audio/ei-en-ti-ai-bi-ou-di-why.mp3" },
    "cell": { meaning: "The basic unit of life.", audio: "audio/si-ee-el-el.mp3" },
    "bronchus": { meaning: "A main airway branch in the lungs.", audio: "audio/bi-ar-ou-en-si-eich-you-es.mp3" },
    "cytoplasm": { meaning: "The jelly-like substance inside a cell.", audio: "audio/si-wai-ti-ou-pi-el-ei-es-em.mp3" },
    "cholesterol": { meaning: "A lipid important for cell membranes.", audio: "audio/si-eich-ou-el-ee-es-ti-ar-ou-el.mp3" },
    "atom": { meaning: "The basic unit of matter.", audio: "audio/ei-ti-ou-em.mp3" },
    "electron": { meaning: "A negatively charged particle in an atom.", audio: "audio/i-el-ee-si-ti-ar-ou-en.mp3" },
    "proton": { meaning: "A positively charged particle in an atom's nucleus.", audio: "audio/pi-ar-ou-ti-ou-en.mp3" },
    "neutral": { meaning: "Having no charge.", audio: "audio/en-ee-you-ti-ar-ei-el.mp3" },
    "core": { meaning: "The central part, often referring to the nucleus.", audio: "audio/si-ou-ar-ee.mp3" },
    "orbital": { meaning: "A region where an electron is likely to be found.", audio: "audio/ou-ar-bi-ai-ti-ei-el.mp3" },
    "motion": { meaning: "The act of moving or changing position.", audio: "audio/em-ou-ti-ai-ou-en.mp3" },
    "harmonic": { meaning: "Related to frequencies that are multiples of a fundamental frequency.", audio: "audio/eich-ei-ar-em-ou-en-ai-si.mp3" },
    "magnitude": { meaning: "The size or extent of something.", audio: "audio/em-ei-ji-en-ai-ti-you-di-ee.mp3" },
    "oscillatory": { meaning: "Involving repeated back-and-forth movement.", audio: "audio/ou-es-si-ai-el-el-ei-ti-ou-ar-why.mp3" },
    "vibratory": { meaning: "Relating to vibration or rapid movement.", audio: "audio/vi-ai-bi-ar-ei-ti-ou-ar-why.mp3" },
    "acoustics": { meaning: "The study of sound and its properties.", audio: "audio/ei-si-ou-you-es-ti-ai-si-es.mp3" },
    "speed": { meaning: "The rate at which something moves or travels.", audio: "audio/es-pi-ee-ee-di.mp3" },
    "teach": { meaning: "The act of instructing or educating.", audio: "audio/ti-ee-ei-si-eich.mp3" },
    "epidemic": { meaning: "A widespread occurrence of disease.", audio: "audio/ee-pi-ai-di-ee-em-ai-si.mp3" },
    "liver": { meaning: "An organ that processes nutrients and detoxifies.", audio: "audio/el-ai-vi-ee-ar.mp3" },
    "hyssop": { meaning: "A plant used in traditional medicine and rituals.", audio: "audio/eich-wai-es-es-ou-pi.mp3" },
    "atomic mass": { meaning: "The mass of an atom, mostly from protons and neutrons.", audio: "audio/ei-ti-ou-em-ai-si-em-ei-es-es.mp3" },
    "atomic number": { meaning: "The number of protons in an atom's nucleus.", audio: "audio/ei-ti-ou-em-ai-si-en-you-em-bi-ee-ar.mp3" },
    "electronic configuration": { meaning: "The arrangement of electrons in an atom.", audio: "audio/i-el-ee-si-ti-ar-ou-en-ai-si-kon-fi-gi-ou-rei-shon.mp3" },
    "parabolic": { meaning: "Shaped like a parabola; describes certain types of paths or curves.", audio: "audio/pi-ei-ar-ei-bi-ou-el-ai-si.mp3" },
    "vertical_launch": { meaning: "An upward movement starting from a vertical position.", audio: "audio/vi-ee-ar-ti-ai-si-ei-el-el-ou-en-si-eich.mp3" },
    "sound": { meaning: "Vibrations that travel through a medium and are heard.", audio: "audio/es-ou-you-en-di.mp3" }
};



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
