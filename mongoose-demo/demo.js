const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

//创建一个模型，就是再设计数据库
//mongodb是动态的，在代码中设计数据库，mongoose包使设计编写过程简单
const Cat = mongoose.model('Cat', { name: String });

//实例化一个cat
const kitty = new Cat({ name: 'Zildjian' });

//持久化保存kitty实例
kitty.save().then(() => console.log('meow'));