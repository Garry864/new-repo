function greetUser() {
    const nameInput = document.getElementById('nameInput').value;
    const greeting = document.getElementById('greeting');

    if (nameInput) {
        greeting.textContent = `Hello, ${nameInput}! Welcome to our website.`;
    } else {
        greeting.textContent = `Please enter your name.`;
    }
}
