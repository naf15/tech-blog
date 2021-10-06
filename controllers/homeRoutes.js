const router = require('express').Router()
const withAuth = require('../utils/auth')
const { BlogPost, Comment, User } = require('../models')

/*==================== 
/
====================*/

router.get('/', async (req, res) => {
    try{
        const dbBlogPosts = await BlogPost.findAll({
            order: [
                ['date', 'DESC'],
            ],
            include: [
                {
                    model: User,
                },
                {
                    model: Comment,
                    include: [
                        {
                            model: User
                        }
                    ],
                    order: [
                        ['date', 'DESC']
                    ]
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

/*==================== 
/dashboard
====================*/

router.get('/dashboard', withAuth, async (req,res) => {
    try {
        const dbUserPostsData = await BlogPost.findAll({
            where:{
                user_id: req.session.user_id
            },
            order: [
                ['date', 'DESC']
            ]
        })
        
        const userPosts = dbUserPostsData.map( post => post.get({ plain: true }));    
        
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

/*==================== 
/signup
====================*/

router.get('/signup', async (req, res) => {
    res.render('signup');
})


module.exports = router