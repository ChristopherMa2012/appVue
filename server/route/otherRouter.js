import express from 'express';
import goodsModel from '../model/otherModel'


let router = express.Router();

router.use('/addGood', (req, res) => {
    let body = req.body;
    let obj = Object.create(null);
    obj.gdSN = 234234324;
    Object.keys(body).forEach(item => {
        obj[item] = body[item];
    })
    let goods = new goodsModel(obj);
    goods.save(err => {
        if (err) return handleError(err);
        res.send({ status: 200, 'msg': '添加成功' });

    })
})
export default router;