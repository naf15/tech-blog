const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model {}

BlogPost.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        // comment_id : {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'comment',
        //         key: 'id',
        //     },
        // },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog_post'
    }
);

module.exports = BlogPost;
