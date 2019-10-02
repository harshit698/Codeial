const Posts=require('../models/post');
const User = require('../models/user');
module.exports.home = function(req, res){
    
    console.log(req.cookies);

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

    Posts.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec(function(err, posts){

        User.find({}, function(err, users){
            return res.render('home', {
                title: "Codeial | Home",
                posts:  posts,
                all_users: users
            });
        });

       
    })
    // here it is rendering the view
    
}

// module.exports.actionName = function(req, res){}