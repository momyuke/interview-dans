const {DataTypes} = require('sequelize');
const connection = require('../db/connection');

const User = connection.define('users',{
    id: {
        type: DataTypes.UUID,
        allowNull : false,
        primaryKey: true
    },
    
    name: {
        type: DataTypes.STRING
    },
    
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
}, {
    freezeTableName : true,
    paranoid: true 
})

module.exports = User;