var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var Quotation = require("../db/models/quotations");

router.get("/", (req, res, next) => {
    Quotation.find({}, (err, result) => {
        if (err) {
            console.debug("Hey Look! Error", err);
            res.json(err);
        } else {
            // console.log(res);
            res.json(result);
        }
    }).sort({ "_id": -1}) //newest creation to oldest creation
});

router.post("/", (req, res, next) => {
    console.debug(req.body);
    const data = req.body;
    const newQuotation = new Quotation({
        product: data.product,
        price: data.price,
        quantity: data.quantity
    });

    newQuotation.save((err, newInstance) => {
        if (err) {
            console.error("Hey look, Error!", err);
            res.json(err);
        } else {
            res.json(newInstance);
        }
    });
});

router.delete("/:id", (req, res, next) => {
    const id = req.params["id"]; // use ID from the route parameter
    // const id = req.body._id;
    console.log("Delete this id ", id);
    console.debug("Quotation ID to delete", id);
    Quotation.findByIdAndDelete(id, (err, doc) => {
        if (err) {
            console.error("Hey look, Error!", err);
            res.json(err);
        } else {
            res.status(200).json(doc);
        }
    });
});

module.exports = router;
//J