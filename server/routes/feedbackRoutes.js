const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");
const rateLimiter = require("../middlewares/rateLimiter");
const feedbackValidation = require("../validation/feedback");
const {getConnectedClient} = require('../database/database');
const {ObjectId} = require('mongodb');
const getCollection = () => {
    const client = getConnectedClient();
    const collection = client.db('contactDB').collection('contacts');
    return collection;
}

router
  .route("/")
  .post(rateLimiter, feedbackValidation, feedbackController.feedback);

//GET method
router.get('/contacts', async (req,res) => {
    //res.status(200).send({msg: "GET REQUEST TO /api/todos"})
    const collection = getCollection();
    const contact = await collection.find({}).toArray();
    res.status(200).json(contact);
})


//POST method
router.post('/contacts', async (req,res) => {
    const collection = getCollection();
    const { name, email, subject, text } = req.body;
    if (!name || !email || !subject || !text) {
        return res.status(400).json({ msg: "error no object found" });
    }

    const newEmail = await collection.insertOne({ name, email, subject, text });

    res.status(200).send({ name, email, subject, text, _id: newEmail.insertedId });
    //res.status(201).send({msg: "POST REQUEST TO /api/todos"})
})

//PUT method
router.put('/contacts/:id', (req,res) => {
    res.status(200).send({msg: "PUT REQUEST TO /api/contacts"})
})

//DELETE method
router.delete('/contacts/:id', (req,res) => {
    res.status(200).send({msg: "DELETE REQUEST TO /api/contacts"})
})

module.exports = router;