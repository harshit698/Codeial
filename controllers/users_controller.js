const User=require('../models/user');

module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}

//render the signup page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title: 'Codeail | Sign Up'
    })
}

//render the signin page
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title: 'Codeail | Sign In'
    })
}
 

// get the signup data

module.exports.create=function(req,res){
    
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('Error in findinguser in signing up')
        }

        if(!user){
            User.create(req.body,function(req,user){
                if(err){
                    console.log('error in creating user account');
                    return;
                }

                console.log('crea');
                return res.redirect('/users/signIn');
            })
        }else{
            return res.redirect('back');
        }
    })



}

// signIn and create the session for the user
module.exports.createSession=function(req,res){

    // steps to authenticate

    //find the user
    user.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('error in finding user!');
        }
        // handle user found

        if(user){
            // handle password which don't match
            if(user.password!=req.body.password){
                return res.redirect('back');
            }
            // handle session creation

            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');
        }else{
            // handle user not found

            return res.redirect('back');
        }

    })
    

    

    
}

