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
app.use(helmet());

// app.get("/:id", (req, res) => {
//   res.send("API running");
// });

app.use(cors())
// define routes
app.use("/api/test", require("./api/test"));
// app.use("/api/auth", require("./routes/api/auth"));
// app.use("/api/profile", require("./routes/api/profile"));
// app.use("/api/gameRecords", require("./routes/api/gameRecords"));

// const path = require('path');
// app.use(express.static(path.join(__dirname, '../client/build')));
// app.get('*', function (req, res) {
//  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });


// process.env.PORT ||
const PORT = process.env.PORT || 8080;
const expressServer = app.listen(PORT, () =>
  console.log(`express server on port ${PORT}`),
);
const io = require("socket.io")(expressServer, {
  // transports: ['websocket'],
  cors: {
    // origin: ["localhost:3000", "localhost:8080", "http://45.77.203.192"],
  },
});

module.exports = {
  io,
  app,
};
