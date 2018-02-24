import express from 'express';
import model from '../model/model';

let router = express.Router();
router.all('*', (req, res, next) => {
    if (!req.session.isLogin) {
        res.send({ status: 402, msg: '用户未登录' });
        return;
    }
    next();

})
//新增收货地址
router.use('/addAddress', (req, res, next) => {
    let body = req.body;
    let address = new model.Address({
        userId: req.session.userInfo.userId,
        name: body.name,
        phone: body.phone,
        province: body.province,
        city: body.city,
        area: body.area,
        addrDetail: body.addrDetail

    });
    address.save(err => {
        if (err) return new handleError(err);
        res.send({ status: 200, msg: '新增收货地址成功' })

    })
});
//收货地址列表
router.use('/addrList', (req, res, next) => {
    model.Address.find({ 'userId': req.session.userInfo.userId }, (err, address) => {
        if (err) return handleError(err);
        res.send({ addrList: address });
    })
});

export default router;