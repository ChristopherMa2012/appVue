import express from 'express';
import UserModel from '../model/model';

let router = express.Router();

router.use('/register', (req, res, next) => {
    let user = new UserModel({
        name: req.body.userName,
        password: req.body.password
    })
    user.save(err => {
        if (err) {
            return handleError(err);
        } else {
            res.send({ "success": true, 'msg': '注册成功' });
        }
    })
});
// status: 200 登陆成功
// status: 202 用户已登录
// status: 300 当前已有用户登陆，是否切换用户
// status: 400 登陆失败
// status: 402 用户未登录

router.use('/login', (req, res, next) => {
    if (req.body.name == '' || req.body.password == '') {
        res.send({ status: 400, msg: '登陆失败' });
        return;
    }
    let session = req.session;
    if (session.isLogin) {
        if (req.body.name == session.userInfo.name) {
            res.send({ status: 202, msg: '用户已登录' });
        } else {
            res.send({ status: 300, msg: '当前已有用户登陆' });
        }
    } else {
        UserModel.findOne({ 'name': req.body.name, 'password': req.body.password }, (err, result) => {
            if (err) {
                res.send({ status: 400, msg: '登陆失败' });
                handleError(err);
            }
            if (result) {
                session.isLogin = true;
                session.userInfo = Object.create(null);
                session.userInfo.name = result.name;
                res.send({ status: 200, msg: '登陆成功' });
            } else {
                res.send({ status: 400, msg: '登陆失败' });
            }
        })
    }
});

router.use('/isLogin', (req, res, next) => {
    if (req.session.isLogin) {
        res.send({ status: 202, msg: '用户已登录' });
    } else {
        res.send({ status: 402, msg: '用户未登录' });
    }
})

export default router;