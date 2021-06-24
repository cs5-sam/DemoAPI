const express = require('express')
const router = express.Router()

// @route   POST api/auth
// @desc    Authenticate user
// @ access Public 
router.post('/', async (req, res) => {
    console.log(req.body)
    const {email, password} = req.body;
    if(email.length == 0 || password.length == 0){
        res.status(400).json({msg: "Please enter all fields"})
    }
    
    try {
        
        // user exists
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({errors: [{msg: 'Invalid credentials'}]})
        }

        if (password !== user.password){
            return res.status(400).json({errors: [{msg: 'Invalid credentials'}]})
        }
        await user.save()
        res.send('Logged in')
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error')
    }
})

module.exports = router;