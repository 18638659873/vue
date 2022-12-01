使用nodejs创建一个后端访问服务器，用来测试打包dist
1. 创建一个文件夹
2. 用idea工具打开这个项目
3. terminal 下执行命令 
    3.1 npm init 初始化
    在此期间需要执行，项目名称 版本等等... 可以回车省略
    3.2 npm install express
4. 编写server.js文件
5. 启动服务 node server
6. 把打包好的前端代码直接复制到这个文件下就可以了一般都是static文件夹(创建)

也可以借助于 connect-history-api-fallback 类库进行解决history模式的404
1. npm i connect-history-api-fallback
2. 在server.js中配置 直接引入 ，然后在静态资源之前使用就可以了