const Sequelize = require("sequelize");
const dbconnect = require("./db-util");

const script_detail = dbconnect.define("scriptDetailModel", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "脚本ID",
    },
    script_name: {
        type: Sequelize.STRING(64),
        comment: "脚本名称",
    },
    script_owner: {
        type: Sequelize.STRING(64),
        comment: "脚本作者",
    },
    script_gitrepo: {
        type: Sequelize.STRING(64),
        comment: "脚本仓库地址",
    },
    runtime_config: {
        type: Sequelize.STRING(255),
        comment: "脚本运行配置",
    },
    created_at: {
        type: Sequelize.DATE,
        comment: "创建时间",
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },

}, {
    //使用自定义表名
    freezeTableName: true,
    //去掉默认的添加时间和更新时间
    timestamps: false,
    tableName: "script_detail",
});
//同步model至数据库
dbconnect
    .sync({
        alter: true,
    })
    .catch((e) => {
        throw e
    })
module.exports=script_detail