const express = require("express");
const morgan = require("morgan");

const app = express();
const userRoute = require("./rest-services");
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api/v1/users", userRoute);

const port = 4000;

app.listen(port, () => {
  console.log(`server started listening on ${port}.....`);
});
