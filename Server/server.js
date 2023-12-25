const express = require('express');
const cors = require('cors');
const mobileRoutes = require('./mobile')
const port = process.env.port || 3000

const app = express();
app.use(cors({ origin: "*" }))
app.use(express.json())

app.use('/api/mobiles', mobileRoutes)

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: "something went wrong" })
})


app.listen(port, () => {
    console.log("app is listening to port", port);
})