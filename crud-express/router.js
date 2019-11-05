/*
router.js路由模块
职责：
	处理路由
	根据不同的请求方法+请求路径请求不同的处理函数
*/
var fs = require('fs')
var Student = require('./student')

//express提供包装路由的API
var express = require('express')

//1.创建一个路由容器
var router = express.Router()
//2.把路由挂载到路由容器上
router.get('/students', function (req, res) {
	//utf8和data.tostring一样
	/* fs.readFile('./db.json', 'utf8', function (err, data) {
		if (err) {
			return res.status(500).send('Server error.')
		}
		//console.log(typeof data)
		//从文件中读取的数据是字符串，要手动转成对象
		var students = JSON.parse(data).students
		res.render('index.html', {
			fruits: [
				'苹果',
				'香蕉',
				'橘子',
				'菠萝'
			],
			students: students
		})
	}) */
	Student.find(function (err, students) {
		if (err) {
			return res.status(500).send('Server error.')
		}
		res.render('index.html', {
			fruits: [
				'苹果',
				'香蕉',
				'橘子',
				'菠萝'
			],
			students: students
		})
	})
})

router.get('/students/new', function (req, res) {
	res.render('new.html')
})

router.post('/students/new', function (req, res) {
	//1.获取表单数据
	//2.处理
	//	将数据保存到db.json文件中用以持久化
	//3.发送响应
	//先读出来转成对象
	//然后往对象中push数据
	//然后把对象转成字符串
	//然后把字符串再次写入文件
	Student.save(req.body, function (err) {
		if (err) {
			return res.status(500).send('Server error.')
		}
		res.redirect('/students')
	})
})

//渲染编辑学生页面
router.get('/students/edit', function (req, res) {
	//1.在客户端的列表页中处理链接问题（需要有id参数）
	//2.获取要编辑的学生id
	//3.渲染编辑页面
	//	根据id把学生信息查询出
	//	使用模板引擎渲染页面
	Student.findById(parseInt(req.query.id), function (err, student) {
		//req.query.id是字符串
		if (err) {
			return res.status(500).send('Server error.')
		}
		res.render('edit.html', {
			student: student
		})
	})
})

//处理编辑学生
router.post('/students/edit', function (req, res) {
	//1.获取表单数据 req.body
	//2.更新 student.updateById()
	//3.发送响应
	Student.updateById(req.body, function (err) {
		if (err) {
			return res.status(500).send('Server error.')
		}
		res.redirect('/students')
	})
})

//处理删除学生
router.get('/students/delete', function (req, res) {
	Student.deleteById(req.query.id, function (err) {
		if (err) {
			return res.status(500).send('Server error.')
		}
		res.redirect('/students')
	})
})
//3.把router导出 
module.exports = router