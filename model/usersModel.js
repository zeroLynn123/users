var connection = require('./baseServer.js');

module.exports = {
    getAllUsers(callback) {
        var sqlStr = 'SELECT * FROM users';
        connection.query(sqlStr, function(err, results) {
            if (err) return callback(err);
            callback(null, results);
        })
    },

    addNewUser(user, callback) {
        var sqlStr = 'insert into users set ?';
        connection.query(sqlStr, user, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },

    getInfobyId(id, callback) {
        var sqlStr = 'select * from users where id=?';
        connection.query(sqlStr, id, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        })
    },

    editUser(user, callback) {
        console.log(user.id)
        var sqlStr = 'update users set ? where id=?';
        connection.query(sqlStr, [user, user.id], (err, results) => {
            console.log('res1111', results)
            if (err) return callback(err);
            callback(null, results);
        })
    },

    delUserByid(id, callback) {
        var sqlStr = 'delete from users where id=?';
        connection.query(sqlStr, id, (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        })
    }

}