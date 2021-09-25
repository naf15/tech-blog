const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');
const commentRoutes = require('./commentRoutes');

/*==================== 
/api/
====================*/

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/blogposts', blogPostRoutes);

module.exports = router;