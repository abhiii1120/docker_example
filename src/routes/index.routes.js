import { Router } from "express";

const indexRouter = Router();

indexRouter.get('/',(req,res) => {
    res.status(200).json({
        message:"welcome to",
    })
})

indexRouter.get('/aa',(req,res) => {
    res.status(200).json({
        message:"hehe"
    })
})

indexRouter.get('/abc',(req,res) => {
    res.status(200).json({
        message:'test message',
    })
})

indexRouter

export default indexRouter;