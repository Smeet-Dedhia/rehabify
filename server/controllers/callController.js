const User=require("../models/userModel");
const sendEmail=require("../utils/sendEmail");


exports.scheduleCall = async(req,res,next)=>{

    const user = await User.findOne({email:req.body.email});

    if(!user){
        return res.json({message:"no email found", status:false});
    }

    const message = `Your password reset token is (localhost Only) \n\n  \n \n If you have not requested this email then kindly ignore it `;

    try {
        await sendEmail({
            email:user.email,
            subject:`shopHere Password Recovery`,
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