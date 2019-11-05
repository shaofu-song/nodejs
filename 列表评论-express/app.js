var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use('/public/', express.static('./public/'))

//详见github
 app.engine('html', require('express-art-template'))
 
//配置body-parser中间件(解析post请求体) 详见expressjs.com
app.use(bodyParser.urlencoded({ extend: false }))
app.use(bodyParser.json())

var comments = [
	{
		name: '张三',
		message: '今天天气不错',
		dataTime: '2018-8-8'
	},
	{
		name: '张三',
		message: '今天天气不错',
		dataTime: '2018-8-8'
	},
	{
		name: '张三',
		message: '今天天气不错',
		dataTime: '2018-8-8'
	},
	{
		name: '张三',
		message: '今天天气不错',
		dataTime: '2018-8-8'
	},
	{
		name: '张三',
		message: '今天天气不错',
		dataTime: '2018-8-8'
	},
]

app.get('/', function (req, res) {
	res.render('index.html', {
		comments: comments
	})
})

app.get('/post', function (req, res) {
	res.render('post.html')
})

app.post('/post', function (req, res) {
	var comment = req.body
	comment.dateTime = '2019-8-8'
	comments.unshift(comment)
	res.redirect('/')
})

/*app.get('/pinglun', function (req, res) {
	var comment = req.query
	comment.dateTime = '2019-8-8'
	comments.unshift(comment)
	res.redirect('/')
})*/

app.listen(3000, function () {
	console.log('running...')
})