let apiKey = '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
';
let chatArea = document.getElementById('chatArea');
let userMessage = document.getElementById('userMessage');

function login() {
    apiKey = document.getElementById('apiKey').value; // Get API key from the user input
    if (apiKey) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('chat').style.display = 'block';
    }
}

async function sendMessage() {
    const message = userMessage.value;
    userMessage.value = '';  // Clear the input box
    chatArea.innerHTML += `<div>User: ${message}</div>`; // Display user message

    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo', // or use gpt-4 if available
            messages: [{ role: 'user', content: message }]
        })
    });

    const data = await response.json();
    const gptMessage = data.choices[0].message.content;
    chatArea.innerHTML += `<div>ChatGPT: ${gptMessage}</div>`; // Display ChatGPT message
}
