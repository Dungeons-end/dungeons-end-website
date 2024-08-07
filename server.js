const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

const app = express();
app.use(bodyParser.json());

admin.initializeApp({
    credential: admin.credential.applicationDefault()
});

app.post('/createCustomToken', async (req, res) => {
    const robloxId = req.body.robloxId;
    try {
        const customToken = await admin.auth().createCustomToken(robloxId);
        res.json({ token: customToken });
    } catch (error) {
        console.error('Error creating custom token: ', error);
        res.status(500).send('Error creating custom token');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
