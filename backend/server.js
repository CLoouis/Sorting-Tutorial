const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
var PORT = process.env.PORT || 5000;

// sorting router
const sortingRouter = require("./routes/sorting.router");

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile("./build/index.html");
  });
}
// app.get("/", (req, res) => {
//   res.send("Home");
// });
// Sorting routes
app.use("/sorting", sortingRouter);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
