// 创建一个 数据库连接对象
var MySql = require('mysql');

var connection = MySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lin0909',
    database: 'common'
});

connection.connect()


//执行SQL语句
// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) {
//     console.log('[query] - :'+err);
//     return;
//   }
//   console.log('The solution is: ', rows[0].solution); 
// }); 


module.exports = connection;