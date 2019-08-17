const express = require('express')
const router = express.Router()
const Client = require('../models/Client')

router.get('/clients', async (req, res) => {
    let clients
    if(req.query.from && req.query.to){
        clients = await Client.find({
            firstContact: {
                $gt: req.query.from,
                $lt: req.query.to
            }
        })
    } else {
        clients = await Client.find({})
    }
    res.send(clients)
})

router.get('/client/:clientName', async (req, res) => {
    const { clientName } = req.params
    const client = await Client.findOne({name: clientName})
    res.send(client)
})

router.post('/client', async (req, res) => {
    const clientInfo = req.body
    const newClient = new Client(clientInfo)
    await newClient.save()
    res.send('Saved')
})

router.put('/client/:clientName', async (req, res) => {
    const { clientName } = req.params
    const updatedInfo = req.body
    console.log(clientName)
    console.log(updatedInfo)
    await Client.updateOne({name: clientName}, updatedInfo)
    res.send(updatedInfo)
})

module.exports = router