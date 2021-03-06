## 平台设计点
1. 功能流程
  a. 用户系统
    - 对接企业微信用户系统（企业微信管理员权限开通）
    - 自建用户系统
  b. 权限系统
    - 权限：
      - 执行、终止
      - 编辑配置
      - 脚本列表
  c. 页面
    - 登录
    - 脚本列表（脚本基本信息表：脚本唯一标识ID、名称、开发者、仓库地址，配置信息）
    - 查看日志 
    - 编辑查看配置（是否定时、定时周期、运行环境配置）
  f. 配置同步
    - 平台维护定时任务：生成pm2配置文件
  e. 远程执行
    - 服务与平台建立通信
    - ** 服务运行环境 **
      - docker构建镜像
      - pm2任务执行docker 容器
  h. 日志/结果反馈
    - pm2 收集脚本日志
  i. 终止进程 pm2,负责清空定时任务pm2
  j. 进程状态 pm2
  k. 脚本接入规范
    - 平台读取仓库分支源码，源码需要包含DockerFile
2. 流程设计
  1. 用户脚本接入（脚本仓库中提供DockerFile，新增记录到平台脚本列表）
  2. 编辑pm2的配置文件（是否定时、定时周期、运行环境配置）
  3. 平台生成pm2的配置文件
  4. 构建docker镜像
  5. pm2任务执行docker镜像
    1. 终止进程 pm2,负责清空定时任务pm2
    2. 进程状态 pm2
  6. pm2收集脚本日志

