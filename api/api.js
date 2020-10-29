const express = require("express");
const Devices = require("../models/devices");
const Q = require("q");

const router = express.Router();

router.get('/devices', function (req, res) {
    Devices.listDevices()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        });
})

router.post('/devices', function (req, res) {
    console.log(req.body);
    Devices.addDevice(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        });
})

module.exports = router;