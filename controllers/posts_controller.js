const Post=require('../models/post');
const Comment=require('../models/comment');
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

module.exports.destroy=function(req,res){
    Post.findById(req.params.id,function(err,post){
        
        //.id means converting object id into string
        if(post.user == req.user.id){
            post.remove();

            Comment.deleteMany({post:req.params.id},function(err){
                return res.redirect('back');
            });
        }
        else{
            return res.redirect('back');
        }

    })
}