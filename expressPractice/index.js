const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleWaree/logger');
const members = require('./public/Members')

const app = express();

//handlebar middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//body parse middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//homepage Route
app.get('/', (req, res) => res.render('index'));

//sets public folder to static 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => (console.log(`server started on port: ${PORT}`)));