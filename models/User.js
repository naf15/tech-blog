const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password);
    };
};

User.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
                len: [8],
            },
        },
        // blog_post_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'blog_post',
        //         key: 'id',
        //     },
        // },
        // comment_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'comment',
        //         key: 'id',
        //     },
        // },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    },
);

module.exports = User;