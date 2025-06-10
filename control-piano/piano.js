document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.white-key, .black-key');
    
    keys.forEach(key => {
        key.addEventListener('mousedown', () => {
            const note = key.getAttribute('data-note');
            playSound(note);
        });
    });
});

function playSound(note) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.value = getFrequency(note);
    
    gainNode.gain.value = 0.5;
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    oscillator.stop(audioContext.currentTime + 0.5);
}

function getFrequency(note) {
    const notes = {
        'C': 261.63,
        'C#': 277.18,
        'D': 293.66,
        'D#': 311.13,
        'E': 329.63,
        'F': 349.23,
        'F#': 369.99,
        'G': 392.00,
        'G#': 415.30,
        'A': 440.00,
        'A#': 466.16,
        'B': 493.88
    };
    
    return notes[note];
} 