const express = require('express')
const router = express.Router()

const User = require('../../models/Users')

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    res.send('Home user page')
})
// @route   POST api/users
// @desc    Register user
// @ access Public 
router.post('/', async (req, res) => {
    console.log(req.body)
    const {name, email, password} = req.body;
    if(name.length == 0 || email.length == 0 || password.length == 0){
        res.status(400).json({msg: "Please enter all fields"})
    }
    
    try {
        
        // user exists
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({errors: [{msg: 'User already exists'}]})
        }

        user = new User({
            name,
            email,
            password
        })
        await user.save()
        res.send('User registered')
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error')
    }
})

module.exports = router;