async function linkAccount(discordId) {
    try {
        const userData = await getVerifiedUser(discordId);
        const robloxId = userData.robloxId;
        
        const userRef = db.collection('users').doc(robloxId.toString());
        const doc = await userRef.get();
        if (!doc.exists) {
            await userRef.set({
                linked: true,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            alert('Account linked successfully!');
        } else {
            alert('Account already linked');
        }
    } catch (error) {
        console.error('Error linking account: ', error);
        alert('Error linking account. Please try again.');
    }
}

// Example usage: replace with actual Discord ID
linkAccount('DISCORD_USER_ID');
