module.exports.isLoggedIn = (req,res,next) => {
    try{
        if(!req.isAuthenticated()){
            res.send('login first')
            return 'You must be logged in !!'
        }

    } catch(err){
        console.log(err)
    }
    next()

}