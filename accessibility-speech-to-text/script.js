const startButton = document.getElementById('startButton');
const output = document.getElementById('output');

// Check if the browser supports the Web Speech API
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
        startButton.textContent = 'Stop Listening';
        output.textContent = 'Listening...';
    };

    recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript;
            } else {
                interimTranscript += transcript;
            }
        }

        output.innerHTML = `<p>${finalTranscript}</p><p style="color: #666;">${interimTranscript}</p>`;
    };

    recognition.onerror = (event) => {
        output.textContent = `Error: ${event.error}`;
        startButton.textContent = 'Start Listening';
    };

    recognition.onend = () => {
        startButton.textContent = 'Start Listening';
    };

    startButton.addEventListener('click', () => {
        if (startButton.textContent === 'Start Listening') {
            recognition.start();
        } else {
            recognition.stop();
        }
    });
} else {
    output.textContent = 'Your browser does not support the Web Speech API.';
} 