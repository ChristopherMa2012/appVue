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

router.use('/isLogin', (req, res, next) => {
    res.cookie('userName', 'lisi2018', { maxAge: 7200 * 1000, domain: '.800vue.com' });
    req.session.user = {
        'name': '李四',
        'password': 'asdfsdf'
    }
    res.status(200).send({ 'success': true, msg: '已经登陆' });
})

export default router;