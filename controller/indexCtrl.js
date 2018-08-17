var userModel = require('../model/usersModel.js');

module.exports = {
    showIndexPage(req, res) {
        userModel.getAllUsers((err, results) => {
            if (err) return res.render('index', {});
            res.render('index', { list: results })
        });
    },
    addNewUser(req, res) {
        // 拿到客户端传过来的数据
        var newUser = req.body;
        userModel.addNewUser(newUser, (err, results) => {
            if (err || results.affectedRows !== 1) return res.json({ err_code: 1, msg: '添加用户失败！' });
            // 添加完成获取最新的用户数据
            userModel.getAllUsers((err, results) => {
                if (err) return res.json({ err_code: 1, msg: '添加用户失败！' });
                res.json({ err_code: 0, list: results });
            })
        })
    },

    showInfoPage(req, res) {
        var id = req.query.id;
        userModel.getInfobyId(id, (err, results) => {
            if (err) return res.render('index', {});
            res.render('info', results[0]);
        })
    },
    showeditPage(req, res) {
        var id = req.query.id;
        userModel.getInfobyId(id, (err, results) => {
            if (err) return res.render('index', {});
            res.render('edit', results[0]);
        })
    },
    editUser(req, res) {
        var updateUser = req.body;
        userModel.editUser(updateUser, (err, result) => {
            if (err || result.affectedRows !== 1) return res.json({ err_code: 1, msg: '编辑用户失败！' });
            userModel.getAllUsers((err, results) => {
                if (err) return res.json({ err_code: 1, msg: '编辑用户失败！' });
                res.json({ err_code: 0, list: results });
            })
        })
    },
    delUserByid(req, res) {
        var id = req.query.id;
        console.log('id', id)
        userModel.delUserByid(id, (err, result) => {
            if (err || result.affectedRows !== 1) return res.json({ err_code: 1, msg: '删除用户失败！' });
            userModel.getAllUsers((err, results) => {
                if (err) return res.json({ err_code: 1, msg: '编辑用户失败！' });
                res.json({ err_code: 0, list: results });
            })
        })
    }
}