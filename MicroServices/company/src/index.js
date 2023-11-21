const express = require("express");
const morgan = require("morgan");
const route = require("./rest-services");

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.use("/company", route);

const port = 3000;
app.listen(port, () => {
  console.log(`service started running on port ${port}...`);
});
