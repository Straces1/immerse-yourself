const Event = require('../models/event')
// const mongoose = require('mongoose')

// GET events event page
const getEvents = async (req, res) => {
    const events = await Event.find().sort({ createdAt: -1 })
    res.status(200).json(events)
    // res.send("hello")
}
// GET evets home page
const getUpcomingEvents = async (req, res) => {
    const events = await Event.find().limit(2).sort({createdAt: -1})
    res.status(200).json(events)
}
// POST an event
const createEvent = async (req, res) => {
    const {title, desc, snippet, date, picture} = req.body
    try {
        const event = await Event.create({title, desc, snippet, date, picture})
        res.status(200).json(event)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
// DELETE an event
// UPDATE an event

module.exports = {
    getEvents,
    getUpcomingEvents,
    createEvent
}