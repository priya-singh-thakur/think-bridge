const express = require ("express");
var router =  express.Router()
var models = require("../models")

router.post("/additem", async(req, res) => {
        try {
            const { name, description, price, imgUrl} = req.body;
            console.log('data', name, description, price, imgUrl )
            user = await models.User.create({
                name,
                description,
                price,
                imgUrl
            });
    
            res.send({
                success: true,
                data: user
            });
        } catch(ex) {
            res.send({
                success: false,
                message: ex.message
            });
        } 
    });
    
module.exports = router;

