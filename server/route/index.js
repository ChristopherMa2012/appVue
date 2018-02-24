import router from './router'
import verifyRouter from './verifyRouter'

export default app =>{
    app.use(router);
    app.use(verifyRouter);
}