// Function to link account and save to Firestore
async function linkAccount(userId) {
    try {
        const userRef = db.collection('users').doc(userId.toString());
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

// Event listener to handle account linking
document.querySelector('.link-button').addEventListener('click', async () => {
    const username = prompt('Enter your Roblox username:');
    if (username) {
        const userData = await getUserData(username);
        if (userData) {
            await linkAccount(userData.id);
        } else {
            alert('User not found');
        }
    } else {
        alert('Please enter a username.');
    }
});
