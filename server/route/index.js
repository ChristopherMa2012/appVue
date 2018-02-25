import router from './router'
import verifyRouter from './verifyRouter'
import otherRouter from './otherRouter';

export default app =>{
    app.use(router);
    app.use(verifyRouter);
    app.use(otherRouter);
}