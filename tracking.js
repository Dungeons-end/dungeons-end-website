// Function to display user progress
async function displayUserProgress(userId) {
    try {
        const userRef = db.collection('users').doc(userId.toString());
        const doc = await userRef.get();
        if (doc.exists) {
            // Display user progress data
            console.log(doc.data());
        } else {
            console.log('No such document!');
        }
    } catch (error) {
        console.error('Error fetching user data: ', error);
    }
}
