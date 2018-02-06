import express from 'express';
import UserModel from '../model/model';

let router = express.Router();

router.use('/register', function(req, res, next) {
    let user = new UserModel({
        name: req.body.userName,
        password: req.body.password
    })
    user.save(err => {
        if (err) {
            return handleError(err);
        } else {
            res.send({ "success": true });
        }
    })
});

export default router;