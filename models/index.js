const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment =  require('./Comment');

User.hasMany(BlogPost, {
    foreignKey: 'user_id', //change to user_id
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',  //change to user_id
    onDelete: 'CASCADE'
});

BlogPost.hasMany(Comment, {
    foreignKey: 'blog_post_id', //change to blogpost_id
    onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'blog_post_id'
});

module.exports = { User, BlogPost, Comment }