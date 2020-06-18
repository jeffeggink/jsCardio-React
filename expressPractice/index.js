const express = require('express');
const path = require('path');
const members = require('./public/Members')

const app = express();


//gets all members
app.get('/api/members', (req, res) => {
    res.json(members);
});
//sets public folder to static 
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => (console.log(`server started on port: ${PORT}`)));