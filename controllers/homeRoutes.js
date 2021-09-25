const router = require('express').Router()
const withAuth = require('../utils/auth')
const { BlogPost, Comment, User } = require('../models')

/*==================== 
/
====================*/

router.get('/', async (req, res) => {
    try{
        const dbBlogPosts = await BlogPost.findAll({
            include: [
                // {
                //     model: Comment,
                //     attributes: ['body'],
                    
                // },
                {
                    model: User,
                    // attributes: ['name', 'email']
                },
                {
                    model: Comment
                }

            ]
        })
        
        const blogPosts = dbBlogPosts.map( post => post.get({ plain: true }))
        console.log(blogPosts)

        res.render('homepage', {
            loggedIn: req.session.logged_in,
            blogPosts
        });
    } catch(err) {
        console.log(err)
        res.status(500).json(err);
    };
})


// router.get('/', withAuth, async (req,res) => {
//     try {
//         const dbUserPostsData = await BlogPost.findAll({
//             where:{
//                 user_id: req.session.user_id
//             }
//         })

//         console.log(dbUserPostsData)
        
//         const userPosts = dbUserPostsData.map( post => post.get({ plain: true }));    
//         console.log(userPosts)

//         res.render('homepage', {
//             userPosts,
//             loggedIn : req.session.logged_in
//         })
//     } catch(err) {
//         console.log(err);
//         res.status(500).json(err);
//     };
// });


/*==================== 
/dashboard
====================*/

router.get('/dashboard', withAuth, async (req,res) => {
    try {
        const dbUserPostsData = await BlogPost.findAll({
            where:{
                user_id: req.session.user_id
            }
        })

        console.log(dbUserPostsData)
        
        const userPosts = dbUserPostsData.map( post => post.get({ plain: true }));    
        console.log(userPosts)

        res.render('dashboard', {
            userPosts,
            loggedIn : req.session.logged_in
        })
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    };
});

/*==================== 
/dashboard/:id
====================*/

router.get('/dashboard/:id', async (req,res) => {
    res.render('dashboard');
});


/*==================== 
/login
====================*/

router.get('/login', async (req, res) => {
    res.render('login');
})



module.exports = router