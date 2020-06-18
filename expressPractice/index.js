const express = require('express');
const path = require('path');
const moment = require('moment');
const members = require('./public/Members')

const app = express();

const logger = (req, res, next) =>  {
console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`
);
    next();
}

app.use(logger);

//gets all members
app.get('/api/members', (req, res) => {
    res.json(members);
});
//sets public folder to static 
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => (console.log(`server started on port: ${PORT}`)));