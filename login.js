document.getElementById('loginButton').addEventListener('click', async () => {
    const discordId = prompt('Enter your Discord ID:');
    if (discordId) {
        try {
            const userData = await getVerifiedUser(discordId);
            const robloxId = userData.robloxId;
            
            // Use Firebase Authentication to sign in
            auth.signInWithCustomToken(await getCustomToken(robloxId))
                .then(() => {
                    window.location.href = 'dashboard.html';
                })
                .catch((error) => {
                    console.error('Error logging in: ', error);
                    alert('Error logging in. Please try again.');
                });
        } catch (error) {
            console.error('Error fetching user data: ', error);
            alert('Error fetching user data. Please try again.');
        }
    } else {
        alert('Please enter your Discord ID.');
    }
});

async function getCustomToken(robloxId) {
    // Assuming you have a server-side function to create custom tokens
    const response = await fetch('/createCustomToken', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ robloxId })
    });
    const data = await response.json();
    return data.token;
}
