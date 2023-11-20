const express = require('express')
const {
    getEvents,
    getUpcomingEvents,
    createEvent
} = require('../controllers/eventsController')
const router = express.Router()

// GET events event page
router.get('/events', getEvents)
router.get('/dashboard/events-list', getEvents)

// GET upcomming events
router.get('/upcoming-events', getUpcomingEvents)

// POST an event
router.post('/dashboard/events', createEvent)
// DELETE an event
// UPDATE an event

module.exports = router