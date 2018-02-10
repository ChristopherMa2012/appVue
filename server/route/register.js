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

router.use('/login',(req,res,next)=>{
   let session = req.session;
   if(session.userInfo){
       res.send({'isLogin':true,msg:'用户已登录'});
   }else{
       UserModel.findOne({'name': req.body.name,'password':req.body.password},(err,result)=>{
           if(err) {
               res.send({'success':false,msg:'登陆失败'});
               handleError(err);
            }
            if(result){
                session.userInfo = Object.create(null);
                session.userInfo.name = result.name;
                res.send({'success':true,msg:'登陆成功'});
            }else{
               res.send({'success':false,msg:'登陆失败'});
            }
       })
   }
});

router.use('/isLogin', (req, res, next) => {
    if(req.session.userInfo){
        res.send({'isLogin':true,msg:'用户已登录'});
    }else{
        res.send({'isLogin':false,msg:'用户未登录'});
    }
})

export default router;