const Sequelize = require('sequelize');
const db = require('../config/database');
const Report = require('./Report');
const Program = require('./Program');
const Report_Transfer = require('./Report_Transfer');

const User = db.define(
  'playlist__user',
  {
    id: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING(64),
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING(64),
      allowNull: false
    },
    first_name: {
      type: Sequelize.STRING(128)
    },
    last_name: {
      type: Sequelize.STRING(128)
    },
    email: {
      type: Sequelize.STRING(64)
    },
    address: {
      type: Sequelize.STRING(128)
    },
    zip: {
      type: Sequelize.STRING(32)
    },
    city: {
      type: Sequelize.STRING(32)
    },
    country: {
      type: Sequelize.STRING(32)
    },
    phone: {
      type: Sequelize.STRING(32)
    },
    status: {
      type: Sequelize.TINYINT(4)
    },
    level: {
      type: Sequelize.TINYINT(4)
    },
    last_seen: {
      type: Sequelize.DATE
    },
    reset_key: {
      type: Sequelize.STRING(40)
    },
    old_id: {
      type: Sequelize.INTEGER(11)
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  {
    indexes: [
      {
        unique: true,
        fields: ['username']
      }
    ]
  }
);

User.hasMany(Report);
User.hasMany(Program);
User.hasMany(Report_Transfer);

module.exports = User;
