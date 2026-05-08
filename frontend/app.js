const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.querySelector('.question');

let yesScale = 1;
let clickCount = 0;

const noMessages = [
    "Are you sure?",
    "no creo",
    "ig bro",
    "Last chance",
    "Plsssssssssss",
    "Don't do this",
    "me misss u :<",
    "do it for jenisso",
    "bby.....",
    "bueno then click no....."
];

noBtn.addEventListener('click', () => {
    clickCount++;

    // Increase the Yes button size exponentially - much bigger growth
    yesScale += 1 + (clickCount * 0.8);
    
    // Update the question text with playful messages
    if (clickCount <= noMessages.length) {
        question.textContent = noMessages[clickCount - 1];
    } else {
        question.textContent = "IG BRO";
    }

    // Move No button to a random corner/edge position
    const positions = [
        { top: '10px', left: '10px' },
        { top: '10px', right: '10px' },
        { bottom: '10px', left: '10px' },
        { bottom: '10px', right: '10px' },
        { top: '10px', left: '50%', transform: 'translateX(-50%)' },
        { bottom: '10px', left: '50%', transform: 'translateX(-50%)' },
        { top: '50%', left: '10px', transform: 'translateY(-50%)' },
        { top: '50%', right: '10px', transform: 'translateY(-50%)' }
    ];
    
    const randomPos = positions[Math.floor(Math.random() * positions.length)];
    noBtn.style.position = 'fixed';
    noBtn.style.zIndex = '999';
    noBtn.style.transition = 'all 0.3s ease';
    
    // Clear previous position properties
    noBtn.style.top = '';
    noBtn.style.bottom = '';
    noBtn.style.left = '';
    noBtn.style.right = '';
    
    // Apply new position
    Object.keys(randomPos).forEach(key => {
        if (key !== 'transform') {
            noBtn.style[key] = randomPos[key];
        }
    });
    
    // Shrink the No button over time
    const noScale = Math.max(0.2, 1 - (clickCount * 0.07));
    noBtn.style.transform = `scale(${noScale})`;
    noBtn.style.opacity = Math.max(0.2, 1 - (clickCount * 0.08));

    // Make Yes button cover more of the screen
    if (yesScale > 3) {
        yesBtn.style.position = 'fixed';
        yesBtn.style.top = '50%';
        yesBtn.style.left = '50%';
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
        yesBtn.style.zIndex = '1000';
    }
    
    // After all messages shown, make Yes take over completely
    if (clickCount >= noMessages.length) {
        yesScale = 25;
        yesBtn.style.position = 'fixed';
        yesBtn.style.top = '50%';
        yesBtn.style.left = '50%';
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
        yesBtn.style.zIndex = '1000';
        yesBtn.style.width = '200vw';
        yesBtn.style.height = '200vh';
        yesBtn.style.padding = '50px 100px';
        yesBtn.style.fontSize = '4rem';
        
        // Hide the No button after last message
        setTimeout(() => {
            noBtn.style.display = 'none';
        }, 500);
    }
});

yesBtn.addEventListener('click', () => {
    // Celebration!
    document.body.style.background = '#0a0a0a';
    question.textContent = "yayyyy🥺🥺";
    question.style.fontSize = "3rem";
    question.style.color = "#ffffff";
    question.style.textShadow = "0 0 20px rgba(178, 34, 34, 0.8)";
    
    // Hide buttons
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    
    // Create floating hearts celebration
    createHearts();
    
    // Add a sweet message after a delay
    setTimeout(() => {
        const msg = document.createElement('p');
        msg.textContent = "Ntp you wont regret......";
        msg.style.cssText = 'color: #b22222; font-size: 1.5rem; margin-top: 20px; animation: fadeIn 1s ease-in; text-shadow: 0 0 10px rgba(178, 34, 34, 0.5);';
        document.querySelector('.container').appendChild(msg);
    }, 1000);
});

function createHearts() {
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'hearts';
    document.body.appendChild(heartsContainer);
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '❤️ 🥺';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            heart.style.fontSize = (Math.random() * 30 + 15) + 'px';
            heartsContainer.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 100);
    }
}