const authorise=(req,res,next)=>{
    const {user}=req.query
    if(user.toLowerCase()==='abhishek'){
        req.user={name:'Abhishek',id:3}
        // console.log(req.user.name)
        next()
    }else{
        res.status(401).send('Unauthorized')
    }
}

module.exports=authorise