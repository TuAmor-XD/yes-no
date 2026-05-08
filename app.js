const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.querySelector('.question');

let yesScale = 1;
let clickCount = 0;

// Support both click and touch events for mobile
function addTouchSupport(element, handler) {
    element.addEventListener('click', handler);
    element.addEventListener('touchend', (e) => {
        e.preventDefault();
        handler(e);
    });
}

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

function getRandomPosition() {
    // Get safe area dimensions accounting for mobile browser UI
    const margin = 60; // Keep button away from edges
    const btnWidth = noBtn.offsetWidth || 120;
    const btnHeight = noBtn.offsetHeight || 50;
    
    const maxWidth = window.innerWidth - btnWidth - margin;
    const maxHeight = window.innerHeight - btnHeight - margin;
    
    const randomX = Math.random() * maxWidth + (margin / 2);
    const randomY = Math.random() * maxHeight + (margin / 2);
    
    return {
        top: randomY + 'px',
        left: randomX + 'px'
    };
}

addTouchSupport(noBtn, () => {
    clickCount++;

    // Reduce growth rate on mobile devices
    const isMobile = window.innerWidth <= 480;
    const growthFactor = isMobile ? 0.1 : 0.2;
    const baseGrowth = isMobile ? 0.1 : 0.3;
    
    // Increase the Yes button size - slower growth on mobile
    yesScale += baseGrowth + (clickCount * growthFactor);
    
    // Update the question text with playful messages
    if (clickCount <= noMessages.length) {
        question.textContent = noMessages[clickCount - 1];
    } else {
        question.textContent = "IG BRO";
    }

    // Move No button to a random position (mobile-safe)
    const randomPos = getRandomPosition();
    noBtn.style.position = 'fixed';
    noBtn.style.zIndex = '999';
    noBtn.style.transition = 'all 0.3s ease';
    noBtn.style.top = randomPos.top;
    noBtn.style.left = randomPos.left;
    noBtn.style.right = '';
    noBtn.style.bottom = '';
    
    // Shrink the No button over time
    const noScale = Math.max(0.3, 1 - (clickCount * 0.07));
    noBtn.style.transform = `scale(${noScale})`;
    noBtn.style.opacity = Math.max(0.3, 1 - (clickCount * 0.08));

    // Make Yes button cover more of the screen
    if (yesScale > 3) {
        yesBtn.style.position = 'fixed';
        yesBtn.style.top = '50%';
        yesBtn.style.left = '50%';
        yesBtn.style.transform = `translate(-50%, -50%) scale(${Math.min(yesScale, 4)})`;
        yesBtn.style.zIndex = '1000';
    }
    
    // After all messages shown, make Yes take over completely
    if (clickCount >= noMessages.length) {
        yesBtn.style.position = 'fixed';
        yesBtn.style.top = '50%';
        yesBtn.style.left = '50%';
        yesBtn.style.transform = 'translate(-50%, -50%)';
        yesBtn.style.zIndex = '1000';
        yesBtn.style.width = '100vw';
        yesBtn.style.height = '100vh';
        yesBtn.style.padding = '20px';
        yesBtn.style.fontSize = 'clamp(2rem, 10vw, 4rem)';
        yesBtn.style.borderRadius = '0';
        yesBtn.style.maxWidth = 'none';
        yesBtn.style.minWidth = '0';
        
        // Hide the No button after last message
        setTimeout(() => {
            noBtn.style.display = 'none';
        }, 500);
    }
});

addTouchSupport(yesBtn, () => {
    // Celebration!
    document.body.style.background = '#0a0a0a';
    question.textContent = "yayyyy🥺🥺";
    question.style.fontSize = "clamp(2rem, 8vw, 3rem)";
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
        msg.style.cssText = 'color: #b22222; font-size: clamp(1.2rem, 5vw, 1.5rem); margin-top: 20px; animation: fadeIn 1s ease-in; text-shadow: 0 0 10px rgba(178, 34, 34, 0.5);';
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

// Prevent double-tap zoom on iOS
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Handle orientation change
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});