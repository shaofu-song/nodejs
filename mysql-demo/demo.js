var mysql = require('mysql');

//创建链接
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: '网融实习'
});

//连接数据库
connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

//执行数据操作
connection.query('SELECT * FROM `emp`', function(error, results, fields) {
	if (error) throw error;
	console.log('The solution is: ', results)
});

//关闭连接
connection.end()
