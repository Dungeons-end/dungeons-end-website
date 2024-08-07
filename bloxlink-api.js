async function getVerifiedUser(discordId) {
    const response = await fetch(`https://api.blox.link/v1/user/${discordId}`, {
        headers: {
            'Authorization': 'Bearer 29c25836-bedc-4ae0-9977-7854e4a86659'
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    return data;
}
