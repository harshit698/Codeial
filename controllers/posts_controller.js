const Post=require('../models/post');

module.exports.create=function(req,res){

    // if(req.isAuthenticated()){
        Post.create({
            content:req.body.content,
            user: req.user._id
        },
        function(err,post){
            if(err){console.log('error in creating a post'); return;}
    
            return res.redirect('back');
        });
    // }

    // return res.render('user_sign_in', {
    //     title: "Codeial | Sign In"
    // })
    
}