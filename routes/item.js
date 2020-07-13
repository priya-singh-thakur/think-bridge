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
    router.get('/listitem', async(req, res) => {
        try{
            user = await models.User.findAll()
            console.log('data', user)
            res.json({
                success:true,
                data: user
            })
        }
        catch(ex) {
            res.send({
                success:false,
                message:ex.message
            })
        }
    })
    
    router.delete('/deleteitem/:id', async(req, res) => {
        try{
            const id = req.params.id
            console.log("idddddd", id)
            user = await models.User.destroy({
                where: {
                  id: req.params.id
                }
              });
          res.send({
              success:true,
              message: "Item deleted"
          })
        }
        catch(ex){
            res.send({
                success:false,
                message:ex.message
            })
        }
    })
    router.put('/edititem/:id', async(req,res) => {
        try{
            const id = req.params.id;
            let {name,description, price, imgUrl} = req.body;
            console.log('id', id)
            console.log('data', name,description, price, imgUrl)
    
            user = await models.User.update({
                name,
                description,
                price,
                imgUrl
            }, 
            { where: {id}})
            res.send({
                success: true,
                message: "Item Updated"
            })
        }
        catch(ex){
            res.send({
                success: false,
                message: ex.message
            })
        }
    })
    
module.exports = router;

