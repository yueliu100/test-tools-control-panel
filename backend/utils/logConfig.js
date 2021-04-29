const log4js = require('log4js')
const levels = {
    'trace': log4js.levels.TRACE,
    'debug': log4js.levels.DEBUG,
    'info': log4js.levels.INFO,
    'warn': log4js.levels.WARN,
    'error': log4js.levels.ERROR,
    'fatal': log4js.levels.FATAL
};

exports.logger = function (name, level) {
    log4js.configure({
        replaceConsole: true, // 替换 console.log
        appenders: {
            backend: {
                type: "dateFile",
                filename: "../log/backend.log",
                pattern: "-yyyy-MM-dd",
                backups: 5, //旧日志的最大数量
                compress: false, //之前的日志是否压缩，more为true
                keepFileExt: true, //是否保持日志文件后缀名
                alwaysIncludePattern: true, //输出的日志文件名是都始终包含 pattern 日期结尾
            }
        },
        categories:{
            default:{
                appenders:["backend"],
                level:'debug'
            }
        }
    })
    var logger = log4js.getLogger(name);
    //默认为debug权限及以上
    logger.level=(levels[level] || levels['debug']);
    return logger;
};