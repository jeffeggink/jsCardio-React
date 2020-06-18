const express = require('express');
const path = require('path');
const logger = require('./middleWaree/logger');

const app = express();

//body parse middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//sets public folder to static 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => (console.log(`server started on port: ${PORT}`)));