const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
// NOTE: if { force: false } were set to true, it would drop and re-create all of the database tables on startup.
// This definition performs similarly to DROP TABLE IF EXISTS
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening.'));
});