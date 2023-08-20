const textArea = document.getElementById("textArea");
const speakButton = document.getElementById("speakButton");

// Check browser support
if ("speechSynthesis" in window) {
  const synth = window.speechSynthesis;

  speakButton.addEventListener("click", () => {
    const textToSpeak = textArea.value;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Configure pitch and rate for 'emotion'
    utterance.pitch = 1; // Range: 0 to 2, 1 is default
    utterance.rate = 1; // Range: 0.1 to 10, 1 is default

    synth.speak(utterance);
  });
} else {
  alert("Sorry, your browser doesn't support the Web Speech API.");
}
