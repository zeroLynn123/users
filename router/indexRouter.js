var express = require('express');
var router = express.Router();

// 导入ctroller里面的展示首页的模块
var indexCtrl = require('../controller/indexCtrl.js');

router
  .get('/', indexCtrl.showIndexPage)
  .post('/addNewUser', indexCtrl.addNewUser)
  .get('/info', indexCtrl.showInfoPage)
  .get('/edit', indexCtrl.showeditPage)
  .post('/edit', indexCtrl.editUser)
  .get('/delete', indexCtrl.delUserByid)

module.exports = router;