const Sequelize = require("sequelize");
require('dotenv').config()


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host:  process.env.DB_HOST,
    port:process.env.DB_PORT ,
    dialect: process.env.DB_DIALECT,
    pool: {
      //连接池设置
      max: 5, //最大连接数
      min: 0, //最小连接数
      idle: 10000,
    },
  }
);

module.exports=sequelize

// sequelize.authenticate().then(()=>{
//   console.log("数据库已连接！")
// }).catch(err=>{
//   console.log(err)
//   console.log("连接失败")
// })
