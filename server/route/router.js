import express from 'express';
import model from '../model/model';

let router = express.Router();

router.use('/register', (req, res, next) => {
    let user = new model.User({
        name: req.body.userName,
        password: req.body.password
    })
    user.save(err => {
        if (err) return handleError(err);
        res.send({ "success": true, 'msg': '注册成功' });

    })
});
// status: 200 登陆成功
// status: 202 用户已登录
// status: 300 当前已有用户登陆，是否切换用户
// status: 400 登陆失败
// status: 402 用户未登录

//登录
router.use('/login', (req, res) => {
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
        model.User.findOne({ 'name': req.body.name, 'password': req.body.password }, (err, result) => {
            if (err) {
                res.send({ status: 400, msg: '登陆失败' });
                handleError(err);
            }
            if (result) {
                session.isLogin = true;
                session.userInfo = Object.create(null);
                session.userInfo.name = result.name;
                session.userInfo.userId = result.id;
                res.send({ status: 200, msg: '登陆成功' });
            } else {
                res.send({ status: 400, msg: '登陆失败' });
            }
        })
    }
});
//校验是否已经登录
router.use('/isLogin', (req, res) => {
    if (req.session.isLogin) {
        res.send({ status: 202, msg: '用户已登录' });
    } else {
        res.send({ status: 402, msg: '用户未登录' });
    }
})
//商品上架
router.use('/addGood', (req, res) => {
    let body = req.body;
    let obj = Object.create(null);
    obj.gdSN = 234234324;
    Object.keys(body).forEach(item => {
        obj[item] = body[item];
    })
    let goods = new model.Goods(obj);
    goods.save(err => {
        if (err) return handleError(err);
        res.send({ status: 200, 'msg': '添加成功' });

    })
})
//商品列表
router.get('/goodsList', (req, resp) => {
    let type = req.query.goods_type;
    if (type) {
        model.Goods.find({ goods_type: type }, (err, result) => {
            if (err) return handleError(err);
            resp.send({ status: 200, goodsList: result });
        })
    } else {
        let goodsList = [];
        model.Goods.find({ goods_type: 1 }, (err, res) => {
            if (err) return handleError(err);
            goodsList.push(res);
            model.Goods.find({ goods_type: 2 }, (err, res) => {
                if (err) return handleError(err);
                goodsList.push(res);
                model.Goods.find({ goods_type: 3 }, (err, res) => {
                    if (err) return handleError(err);
                    goodsList.push(res);
                    model.Goods.find({ goods_type: 4 }, (err, res) => {
                        if (err) return handleError(err);
                        goodsList.push(res);
                        resp.send({ status: 200, goodsList: goodsList });
                    })
                })
            })
        })
    }
})
//商品详情
router.get('/gdDetail', (req, res) => {
    let gdSN = req.query.gdSN;
    model.Goods.find({ gdSN: gdSN }, (err, result) => {
        if (err) return handleError(err);
        res.send({ status: 200, goodsInfo: result[0] });
    })
})
export default router;