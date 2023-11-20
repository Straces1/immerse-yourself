const express = require('express')
const {
    getClasses,
    createClass,
    deleteClass
} = require('../controllers/classesController')
const router = express.Router()

// GET classes
router.get('/classes', getClasses)
router.get('/dashboard/classes-list', getClasses)

// POST class
router.post('/dashboard/classes-list', createClass)

//DELETE class
router.delete('/dashboard/classes-list/:id', deleteClass)

//UPDATE claa

module.exports = router