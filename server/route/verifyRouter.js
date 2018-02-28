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
//用户信息
router.get('/userInfo',(req,res)=>{
    res.send({status:200,msg:'请求成功',userInfo:req.session.userInfo});
})
//收货地址列表
router.use('/addrList', (req, res, next) => {
    model.Address.find({ 'userId': req.session.userInfo.userId }, (err, address) => {
        if (err) return handleError(err);
        res.send({ addrList: address });
    })
});
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
//删除收货地址
router.use('/deleteAddr', (req, res, next) => {
    let addrId = req.query.addrId;
    model.Address.remove({ _id: addrId }, err => {
        if (err) return handleError(err);
        res.send({ status: 200, msg: '删除成功' });
    })
})
//修改收货地址
router.use('/addrModify', (req, res, next) => {
    let addrObj = req.body;
    // model.Address.save({
    //     '_id': 'ObjectId(' + addrObj.addrId + ')',
    //     'name':addrObj.name,
    //     'phone':addrObj.phone,
    //     'province': addrObj.province,
    //     'city': addrObj.city,
    //     'area':addrObj.area,
    //     'addrDetail':addrObj.addrDetail
    // })
    res.send({ status: 200, msg: '修改成功' });
})
//加入购物车
router.use('/addShopCar', (req, res) => {
    let goodInfo = req.body;
    let shopCar = new model.ShopCarGd({
        userId: req.session.userInfo.userId,
        gdSN: goodInfo.gdSN,
        gdTitle: goodInfo.gdTitle,
        price: goodInfo.price,
        specifications: goodInfo.specifications,
        num: goodInfo.num,
        imgUrl: goodInfo.imgUrl
    })
    shopCar.save(err => {
        if (err) return handleError(err);
        res.send({ status: 200, msg: '加入购物车成功!' });
    })
})

//购物车商品列表
router.use('/shopCarList', (req, res) => {
    model.ShopCarGd.find({ userId: req.session.userInfo.userId }, (err, result) => {
        if (err) return handleError(err);
        res.send({ status: 200, goodsList: result });
    })
})
//修改购物车商品数量
router.use('/shopCarNumMod', (req, res) => {
    let userId = req.session.userInfo.userId;
    let gdSN = req.query.gdSN;
    //way = 1 减  way =2 加
    let way = req.query.modifyWay;
    model.ShopCarGd.findOne({ userId: userId, gdSN: gdSN }, (err, result) => {
        if (err) return handleError(err);
        let num = result.num;
        if (way == 1 && num > 1) {
            num--;
        } else if (way == 1 && num == 1) {
            res.send({ status: 200, msg: '商品数量更新成功' });
            return;
        }
        if (way == 2) num++;
        model.ShopCarGd.findOneAndUpdate({ userId: userId, gdSN: gdSN }, { num: num }, () => {
            res.send({ status: 200, msg: '商品数量更新成功' });
        })
    })
})
export default router;