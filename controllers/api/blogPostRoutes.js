const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

/*==================== 
api/blogposts/
====================*/

// add withAuth

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await BlogPost.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(newPost);
    } catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.put('/', withAuth, async (req, res) => {
    try {
        const updateComment = await BlogPost.update({   
                ...req.body,
            },
            {
            where: {
                user_id: req.session.user_id
            }
        })
        if (!updateComment) {
            res.status(404).json({ message: 'No post found by that id!'})
        }
        res.status(200).json(updateComment)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    };
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deletedPost = await BlogPost.destroy({
            where: {
                id: req.params.id
            },
        });

        if (!deletedPost) {
            res.status(404).json({ message: 'No post by this id!' });
        }
        res.status(200).json(deletedPost);
    } catch (err) {
        res.status(500).json(err)
    }
})

router

module.exports = router;