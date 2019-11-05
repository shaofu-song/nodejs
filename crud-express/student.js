/**
	student.js
	数据操作文件模块
	职责：操作文件中的数据，只处理数据，不关心业务
*/
var fs = require('fs')

var dbPath = './db.json'

/**
*获取所有学生列表
*/
exports.find = function (callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		callback(null, JSON.parse(data).students)
	})
}

/**
 *根据id获取单个学生信息 
*/ 
exports.findById = function (id, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		var students = JSON.parse(data).students
		var ret = students.find(function (item) {
			return item.id === id
		})
		callback(null, ret)
	})
}


/**
 * 添加保存学生
 */
exports.save = function (student, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		var students = JSON.parse(data).students
		
		//处理id唯一的，不重复
		student.id = students[students.length - 1].id + 1
		
		students.push(student)
		//把对象数据转换为字符串
		var fileData = JSON.stringify({
			students: students
		})
		fs.writeFile(dbPath, fileData, function (err) {
			if (err) {
				return callback(err)
			}
			callback(null)
		})
	})
}

/**
 * 更新学生
 */
exports.updateById = function (student, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		var students = JSON.parse(data).students
		
		//注意：这里把id统一转换为数字类型，表单传的数据都是字符串类型(即req.body)，赋值之后json文件中的id变为字符串类型return item.id === student.id
		student.id = parseInt(student.id)
		
		//修改谁把谁找出来
		//es6中数组方法find
		//接受一个函数做参数，当某个遍历项符合item.id === student.id条件的时候，find终止遍历，同时返回遍历对象
		var stu = students.find(function (item) {
			return item.id === student.id
		})
		//遍历拷贝对象
		for (var key in student) {
			stu[key] = student[key]
		}
		
		//把对象数据转换为字符串
		var fileData = JSON.stringify({
			students: students
		})
		fs.writeFile(dbPath, fileData, function (err) {
			if (err) {
				return callback(err)
			}
			callback(null)
		})
	})
}

/**
 * 删除学生
 */
exports.deleteById = function (id, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		var students = JSON.parse(data).students
		
		//findIndex 方法专门用来根据条件查找元素的下标
		var deleteId = students.findIndex(function (item) {
			return item.id === parseInt(id)
		})
		
		//根据下标从数组中删除对应的学生对象
		students.splice(deleteId, 1)
		
		//把对象数据转换为字符串
		var fileData = JSON.stringify({
			students: students
		})
		fs.writeFile(dbPath, fileData, function (err) {
			if (err) {
				return callback(err)
			}
			callback(null)
		})
	})
}

