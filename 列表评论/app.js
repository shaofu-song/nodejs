var http = require('http')
var fs = require('fs')
var url = require('url')
var template = require('art-template')

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

http.
	createServer(function (req, res) {
	var parseObj = url.parse(req.url, true)	
	
	var pathname = parseObj.pathname
	if (pathname === '/') {
		fs.readFile('./views/index.html', function (err, data) {
			if (err) {
				return res.end('404 Not Found.')
			}
			var htmlStr = template.render(data.toString(), {
				comments: comments
			})
			res.end(htmlStr)
		})
	} else if (pathname === '/post') {
		fs.readFile('./views/post.html', function (err, data) {
			if (err) {
				return res.end('404 Not Found.')
			}
			res.end(data)
		})
	} else if (pathname.indexOf('/public/') === 0) {
		fs.readFile('.' + pathname, function (err, data) {
			if (err) {
				return res.end('404 Not Found.')
			}
			res.end(data)
		})
	} else if (pathname === '/pinglun') {
		var comment = parseObj.query
		comment.dataTime = '2019-11-2'
		comments.push(comment)
		res.statusCode = 302
		res.setHeader('Location','/')
		res.end()
	}else {
		fs.readFile('./views/404.html', function (err, data) {
			if (err) {
				return res.end('404 Not Found.')
			}
			res.end(data)
		})
	}
})
.listen(3000, function () {
	console.log('running...')
})