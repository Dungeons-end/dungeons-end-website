async function getUserData(username) {
    const response = await fetch(`https://users.roblox.com/v1/usernames/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usernames: [username] })
    });
    const data = await response.json();
    return data.data[0];
}

document.querySelector('.link-button').addEventListener('click', async () => {
    const username = prompt('Enter your Roblox username:');
    const userData = await getUserData(username);
    if (userData) {
        alert(`User ID: ${userData.id}`);
    } else {
        alert('User not found');
    }
});
