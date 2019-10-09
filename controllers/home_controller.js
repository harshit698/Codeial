const Posts=require('../models/post');
const User = require('../models/user');
module.exports.home = async function(req, res){
    
    console.log(req.cookies);

    try{

        let posts=await Posts.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        });
        let users= await User.find({});
        
        
            return res.render('home', {
                title: "Codeial | Home",
                posts:  posts,
                all_users: users
            });
        
    }catch(err){
        console.log('Error',err);
        return;
    }
    // Posts.find({},function(err,posts){
    //     if(err)
    //     {
    //         console.log("error in fetchng posts from db")
    //         return;
    //     }
    //     return res.render('home', {
    //         title: "Codeial | Home",
    //         Post_list:posts
    //     });
    // });

}

// module.exports.actionName = function(req, res){}


// using then
// Post.find({}).populate('comments').then(function());

// let posts =Post.find({}).populate('comments').exec();

// posts.then();