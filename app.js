const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use(cors());

//routes
var studentRoute = require('./routes/student');
var subjectRoute = require('./routes/subject');
var krsRoute = require('./routes/krs');

app.use('/student', studentRoute)
app.use('/subject', subjectRoute)
app.use('/krs', krsRoute)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running at port : ${PORT}`);
})