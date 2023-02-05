const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json())
app.use(cors());

app.get('/test', (req, res) => {
    return res.json({"isRunning": true});
});

app.listen(8080, () => {
    console.log("Mega Backend running in http://localhost:8080/");
});
