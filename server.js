import { express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

if (process.env.NODE_ENV !== "production") require("dotenv").config();
// var cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cros());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port" + port);
});
