const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyparser.urlencoded({extended: true}))

app.use("/", require("./routes/index"));
app.use("/basket", require("./routes/basket"));
app.use("/signin", require("./routes/signin"));
app.use("/signin/signup", require("./routes/signup"));
app.use("/aboutus", require("./routes/aboutus"));


app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);