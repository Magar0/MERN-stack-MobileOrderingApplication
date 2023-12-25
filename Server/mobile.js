const express = require('express');
const dbConnect = require("./mongoose/dbConnect");
const Mobile = require("./mongoose/schema");

const router = express.Router();

//Get all data
// router.get('/', async (req, res) => {
//     try {
//         await dbConnect();
//         const mobiles = await Mobile.find();
//         res.status(200).json(mobiles)
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: "Error fetching details" })
//     }
// })



//get filter data using limit skip
router.get('/', async (req, res) => {
    try {
        const { price = ["", ""], name, brand, type, processor, memory, os, limit, skip } = req.query;
        const query = {};

        if (name) {
            query.name = { $regex: name, $options: 'i' };
        }
        if (brand) {
            query.brand = { $regex: brand, $options: 'i' };
        }
        if (type) {
            query.type = type;
        }
        if (price[0]) {
            query.price = { $gte: price[0] };
        }
        if (price[1]) {
            query.price = { ...query.price, $lte: price[1] };
        }

        if (processor) {
            query.processor = { $regex: processor, $options: 'i' };
        }
        if (memory) {
            query.memory = memory;
        }
        if (os) {
            query.os = { $regex: os, $options: 'i' };
        }

        await dbConnect();
        const mobiles = await Mobile.find(query).skip(skip).limit(limit)
        const totalItems = await Mobile.find(query).count()
        res.status(200).json({ mobiles, totalItems })
    }

    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong in filtering" })
    }
})


//Get mobiles by id
router.get('/:id', async (req, res) => {
    try {
        await dbConnect();
        const mobiles = await Mobile.findById(req.params.id)
        res.status(200).json(mobiles)
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: "Mobile not found" })
    }
})

//Add a new mobile

router.post('/', async (req, res) => {
    try {
        const { name, type, brand, img, price, processor, memory, os } = req.body;
        console.log(name);
        // Validating
        if (!name || !price || !brand) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        await dbConnect();
        // const mobile = new Mobile({ name, type, price, processor, memory, os });
        // await mobile.save();
        Mobile.create({ name, type, brand, img, price, processor, memory, os });
        res.status(201).json("Mobile added successful");
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error adding mobile' });
    }
});


//Deleting
router.delete('/:id', async (req, res) => {
    try {
        await dbConnect();

        const mobile = await Mobile.findByIdAndDelete(req.params.id);
        console.log(mobile);
        if (!mobile) {
            return res.status(404).json({ message: 'Mobile not found' });
        }
        res.status(200).json({ message: "Deleted Successful" })

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "something went wrong" })
    }
})


module.exports = router;