const express = require('express');
const path = require('path');
const logger = require('./middleWaree/logger');
const members = require('./public/Members')

const app = express();

app.use(logger);

//gets all members
app.get('/api/members', (req, res) =>  res.json(members));

//gets one member
app.get('/api/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `no member with that ${req.params.id} id  you idiot`})
    }
    //res.json(members.filter(member => member.id === parseInt(req.params.id)));
});

//sets public folder to static 
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => (console.log(`server started on port: ${PORT}`)));