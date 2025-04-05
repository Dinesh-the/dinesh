document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const landingPage = document.getElementById('landingPage');
    const tutorInterface = document.getElementById('tutorInterface');
    const startLearningBtn = document.getElementById('startLearningBtn');
    const loginBtn = document.getElementById('loginBtn');
    const backToHomeBtn = document.getElementById('backToHomeBtn');
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    
    // Event Listeners
    startLearningBtn.addEventListener('click', showTutorInterface);
    loginBtn.addEventListener('click', showTutorInterface);
    backToHomeBtn.addEventListener('click', showLandingPage);
    sendMessageBtn.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Functions
    function showTutorInterface() {
        landingPage.style.display = 'none';
        tutorInterface.style.display = 'flex';
        
        // Simulate AI welcome message
        setTimeout(() => {
            addTutorMessage("¡Hola! I'm your AI language tutor. Ready to learn some Spanish today?");
        }, 1000);
    }
    
    function showLandingPage() {
        landingPage.style.display = 'flex';
        tutorInterface.style.display = 'none';
    }
    
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            addUserMessage(messageText);
            messageInput.value = '';
            
            // Simulate AI response
            setTimeout(() => {
                simulateAIResponse(messageText);
            }, 1000);
        }
    }
    
    function addUserMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${text}</p>
                <small>${getCurrentTime()}</small>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }
    
    function addTutorMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message tutor-message';
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${text}</p>
                <small>${getCurrentTime()}</small>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }
    
    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        return `${hours}:${minutes} ${ampm}`;
    }
    
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function simulateAIResponse(userMessage) {
        const responses = [
            "That's a great start! Now try to say: '¿Cómo estás?' which means 'How are you?'",
            "Excellent! Remember in Spanish, the adjective usually comes after the noun.",
            "¡Muy bien! Your pronunciation is improving. Let's practice some more.",
            "I noticed you're doing well with vocabulary. Would you like to try a more challenging exercise?",
            "That's correct! Now let's try to form a complete sentence with that word."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addTutorMessage(randomResponse);
        
        // Randomly add vocabulary or grammar tip
        if (Math.random() > 0.7) {
            setTimeout(() => {
                const tips = [
                    "Grammar Tip: In Spanish, nouns have genders. Words ending in -o are usually masculine, and -a are usually feminine.",
                    "Vocabulary: 'Libro' means book, 'escuela' means school, 'maestro' means teacher.",
                    "Pronunciation Tip: Roll your 'r's when you see 'rr' in a word like 'perro' (dog)."
                ];
                const randomTip = tips[Math.floor(Math.random() * tips.length)];
                addTutorMessage(randomTip);
            }, 1500);
        }
    }
    
    // Initialize with landing page visible
    showLandingPage();
});