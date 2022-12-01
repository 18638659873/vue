// 引入express
const express = require('express')

// 引入history库 解决路由history404的问题
const history = require('connect-history-api-fallback')
// 实例化这个app
const app = express()

// 使用history
app.use(history())

// 指定静态资源文件的路径
app.use(express.static(__dirname + '/static'))

// 随便创建一个访问地址，用来测试使用
app.get('/person', (req, res) => {
  res.send({
    name: 'chong',
    age: 12
  })
})

app.listen(5000, (err) => {
  if (!err) {
    console.log('服务器启动成功了！')
  }
})