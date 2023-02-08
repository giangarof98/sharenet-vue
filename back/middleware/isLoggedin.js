module.exports.isLoggedIn = (req,res,next) => {
    // console.log(req.user)
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