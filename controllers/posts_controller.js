const Post=require('../models/post');
const Comment=require('../models/comment');
module.exports.create=async function(req,res){

    // if(req.isAuthenticated()){
        try{
            await Post.create({
                content:req.body.content,
                user: req.user._id
                
            });
            return res.redirect('back');
        }
        catch(err){
            console.log('Error',err);
            return;
        }
        
    // }

    // return res.render('user_sign_in', {
    //     title: "Codeial | Sign In"
    // })
    
}

module.exports.destroy=async function(req,res){
    try{
        let post=await Post.findById(req.params.id);
        
            //.id means converting object id into string
            if(post.user == req.user.id){
                post.remove();
    
                await Comment.deleteMany({post:req.params.id});
                return res.redirect('back');
            }
            else{
                return res.redirect('back');
            }
    }catch(err){
        console.log('Error',err);
        return;
    }
    
}