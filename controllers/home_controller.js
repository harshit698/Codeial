module.exports.home = function(req, res){
    
    // here it is rendering the view
    return res.render('home', {
        title: "Home"
    });
}

// module.exports.actionName = function(req, res){}