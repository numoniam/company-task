const express = require("express");
const morgan = require("morgan");
const router = require("./rest-services");

const app = express();
app.use(morgan("tiny"));

app.use("/api/v1/users", router);

const port = 8000;
app.listen(port, () => {
  console.log(`server stated listening on port ${port}.....`);
});
