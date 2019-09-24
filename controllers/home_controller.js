const Posts=require('../models/post');

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

    Posts.find({}).populate('user').exec(function(err,posts){
        if(err)
        {
            console.log("error in fetchng posts from db")
            return;
        }
        return res.render('home', {
            title: "Codeial | Home",
            Post_list:posts
        });
    })
    // here it is rendering the view
    
}

// module.exports.actionName = function(req, res){}