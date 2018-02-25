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
router.use('/deleteAddr',(req,res,next)=>{
    let addrId = req.query.addrId;
    model.Address.remove({_id:addrId},err =>{
        if(err) return handleError(err);
        res.send({status:200,msg:'删除成功'});
    })
})
//修改收货地址
router.use('/addrModify',(req,res,next)=>{
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
   res.send({status:200,msg:'修改成功'});   
})


export default router;