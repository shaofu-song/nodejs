# nodejs
## crud-express
  **1.npm install安装项目依赖**
  **2.node app.js运行项目**
  * 项目介绍：
    * 该项目利用expres框架实现对本地json文件中进行学生数据增删改查。
  * 实现原理：
    * 1.对项目进行模块化开发，
        * app.js入口模块：进行创建服务、做服务相关配置、挂载路由、监听端口启动服务；
        * router.js模块：进行处理路由，根据不同的请求方法和请求路径请求不同的处理函数；
        * student.js数据操作文件模块：操作文件中的数据，只处理数据，不关心业务。
    * 2.利用bootstrap进行页面静态布局，实现首页、添加学生页、修改学生页。
    * 3.配置body-parse用来解析表单post请求体。
    * 4.配置项目静态资源，提供静态服务。
    * 5.配置express-art-template对前台页面进行数据渲染。
    * 6.通过express的中间件router配置项目路由资源。
    * 7.通过node的fs核心模块对本地json文件进行读取操作。
  * 链接：
    * [crud-express](http://47.104.149.241:3001/students)
  * 项目路由：
    * /students
      * 请求方式：GET
      * 请求参数: 无参数
      * 作用：渲染首页
    * /students/new
      * 请求方式：GET
      * 请求参数: 无参数
      * 作用：渲染添加学生页面
    * /students/new
      * 请求方式：POST
      * 请求参数: name、age、gender、hobbies
      * 作用：处理添加学生表单请求
    * /students/edit
      * 请求方式：GET
      * 请求参数: id
      * 作用：渲染学生编辑页面
    * /students/edit
      * 请求方式：POST
      * 请求参数: id、name、age、gender、hobbies
      * 作用：处理编辑学生表单请求
    * /students/delete
      * 请求方式：GET
      * 请求参数: id
      * 作用：处理删除学生表单请求

