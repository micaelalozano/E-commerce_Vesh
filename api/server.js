const express = require("express");
const app = express();
const db = require("./db");
const models = require("./models");
const router = require("./routes");
const cors = require("cors");
const PORT = process.env.PORT || 5432;

app.use(express.static("src"));

//Middleware

//app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", router);

db.sync({ force: false }).then(() => {
  console.log("Db Connected");
  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
});
