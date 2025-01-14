function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-window');

    const userMessage = userInput.value;
    if (!userMessage) return;

    // Display user's message
    const userBubble = document.createElement('div');
    userBubble.textContent = userMessage;
    userBubble.className = 'user-message';
    chatWindow.appendChild(userBubble);

    // Clear input
    userInput.value = '';

    // Send to server
    fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userMessage })
    })
    .then(response => response.json())
    .then(data => {
        const botBubble = document.createElement('div');
        botBubble.textContent = data.response;
        botBubble.className = 'bot-message';
        chatWindow.appendChild(botBubble);
    });
}
