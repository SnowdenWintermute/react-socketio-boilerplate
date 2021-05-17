const express = require("express");
const helmet = require("helmet");
// const connectDB = require("./config/db");
const cors = require('cors')
require('dotenv').config();

const app = express();

// connect database
// connectDB();

// init middleware
app.use(express.json({ extended: false }));
app.use(helmet({
  contentSecurityPolicy: false,
}));

// app.get("/:id", (req, res) => {
//   res.send("API running");
// });

app.use(cors())
// define routes
app.use("/api/test", require("./api/test"));

const path = require('path');
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


// process.env.PORT ||
const PORT = process.env.PORT || 8081;
const expressServer = app.listen(PORT, () =>
  console.log(`express server on port ${PORT}`),
);
const io = require("socket.io")(expressServer, {
  cors: {
    methods: ['GET', 'PATCH', 'POST', 'PUT'],
    origin: true
  },
});

module.exports = {
  io,
  app,
};
