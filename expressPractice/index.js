const express = require('express');
const path = require('path');
const logger = require('./middleWaree/logger');

const app = express();

//sets public folder to static 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

//app.use('/api/members')

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => (console.log(`server started on port: ${PORT}`)));