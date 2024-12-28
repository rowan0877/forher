let flirtyMessages = [
    "Wth do you even know how long this took to make 💀",
    "Bro relax wth ;-;",
    "Okay okay I love you too 🗿💖",
    "Bro im just doing all this for you wth relax na ;-;",
    "Nigga if somebody did all this for me na, I wouldn't even be in a bad mood at all istg",
    "Okay this is the last one please click on I love you too 🗿🙏",
    "WHAT TFFFF RELAX NA ;-;",
    "Bro this took so long chill wth 😭😭🙏 ",
    "Okay I promise you won't see anything after this 🗿",
];

let messageIndex = 0;

function showFlirtyMessage() {
    document.getElementById('response').innerText = flirtyMessages[messageIndex];
    document.getElementById('response').style.opacity = 1;
    messageIndex = (messageIndex + 1) % flirtyMessages.length;
    document.getElementById('confetti').style.display = 'none';
}

function showLoveYouToo() {
    document.getElementById('initialMessage').style.opacity = 0;
    document.getElementById('response').style.opacity = 0;
    document.getElementById('confetti').style.display = 'none';
    document.getElementById('confetti').style.display = 'block';
    startConfetti();
    
    setTimeout(() => {
        document.getElementById('response').innerText = "OH GOD FINALLY 😭😭 I LOVE YOU TOOOOOO 🗿🗿💖💖💖";
        document.getElementById('response').style.opacity = 1;
    }, 1500);
}

function startConfetti() {
    const confettiElement = document.getElementById('confetti');
    for (let i = 0; i < 150; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const size = Math.random() * 10 + 5;
        confettiPiece.style.left = `${randomX}%`;
        confettiPiece.style.top = `${randomY}%`;
        confettiPiece.style.width = `${size}px`;
        confettiPiece.style.height = `${size}px`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
        confettiElement.appendChild(confettiPiece);
    }
}