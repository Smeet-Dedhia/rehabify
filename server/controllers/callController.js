const User=require("../models/userModel");
const sendEmail=require("../utils/sendEmail");


exports.scheduleCall = async(req,res,next)=>{

    const user = await User.findOne({email:req.body.email});

    if(!user){
        return res.json({message:"no email found", status:false});
    }

    const message = `Welcome to Rehabify!

    Congrats on making the decision to meet with our medical professionals and combat substance abuse, one day at a time.
    
    You selected your slot as Monday, 20 Mar, 8:00 AM.
    
    Please join the call at the following link:`

    try {
        await sendEmail({
            email:user.email,
            subject:`Your consultancy has been scheduled`,
            message,

        });

        res.status(200).json({
            success:true,
            message: `Email sent to ${user.email} succesfully`,
        });
        
    } catch (error) {
      next(error);
    }
}