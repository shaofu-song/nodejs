var mongoose = require('mongoose')

var Schema = mongoose.Schema

//1.连接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

//2.设计文档结构（表结构）
//字段名称是表结构中的属性名称
//约束的目的是为了保证数据的完整性，不要脏数据
var userSchema = new Schema({
	username: {
		type: String,
		required: true //必须有
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String
	}
})

//3.将文档结构发布为模型
//mongoose.model方法就是将一个架构发布为model
//返回值：模型架构函数
var User = mongoose.model('User', userSchema)

//4.可以使用构造函数对users中的数据进行增删改查

/**
 * 新增数据
 */
/* var admin = new User({
	username: 'zs',
	password: '123456',
	email: 'admin@admin.com'
})

admin.save(function (err, ret) {
	if (err) {
		console.log('保存失败')
	} else {
		console.log('保存成功')
		console.log(ret)
	}
}) */

/**
 * 查询数据
 */
//查询所有
/* User.find(function (err, ret) {
	if (err) {
		console.log('查询失败')
	} else {
		console.log(ret)
	}
}) */

//按条件查询所有 结果为数组
/* User.find({
	username: 'zs'
}, function (err, ret) {
	if (err) {
		console.log('查询失败')
	} else {
		console.log(ret)
	}
}) */

//按条件单个查询  结果为对象
/* User.findOne({
	username: 'zs',
	password: '123456'
}, function (err, ret) {
	if (err) {
		console.log('查询失败')
	} else {
		console.log(ret)
	}
}) */

/**
 * 删除数据
 */
/* User.remove({
	username: 'zs'
}, function (err, ret) {
	if (err) {
		console.log('删除失败')
	} else {
		console.log('删除成功')
		console.log(ret)
	}
}) */


/**
 * 更新数据
 */
/* User.findByIdAndUpdate('5d65dd85c303271f30541e10', {
	password: '123'
}, function (err, ret) {
	if (err) {
		console.log('更新失败')
	} else {
		console.log('更新成功')
	}
}) */