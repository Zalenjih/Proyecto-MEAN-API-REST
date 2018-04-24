const express = require ('express');
const app = express();
const cors = require('cors');
const indexRoutes = require("./routes/index");
const tasksRoutes = require("./routes/tasks");
const path = require('path');

// Settings
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Middlewares
app.use(cors());
app.use(express.json()); // Body-parser
app.use(express.urlencoded({extended: false}));

// Routers
//app.use(indexRoutes);
app.use('/api',tasksRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'dist')))

// Start server
app.listen(app.get('port'), () =>{
    console.log("server on port ", app.get('port'));
});