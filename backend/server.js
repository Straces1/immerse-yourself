require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

// routes
const eventsRoutes = require('./routes/eventsRoutes')
const classesRoutes = require('./routes/classesRoutes')

const app = express()

//middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'))
app.use(bodyParser.json())


//routes
app.use('/api', eventsRoutes)
app.use('/api', classesRoutes)

// emailer -- it's here just for now -- migrate later
app.post('/api/message', async (req, res) => {
    const {name, email, subject, message} = req.body
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
            auth: {
                user: 'on.straces@gmail.com',
                pass: process.env.EMAIL_PASS
            }
    });
    const mail_options = {
        from: email,
        to: 'on.straces@gmail.com',
        subject: subject,
        text: message
    };
    try {
        await transporter.sendMail(mail_options)
        res.json({message: 'Message was successfully sent!'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Error sending message'})
    }
})


//connect to db
const port = process.env.PORT || 3003
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Connected to DB and listening on port ${port}`)
        })
    })
    .catch((err) => console.log(err))