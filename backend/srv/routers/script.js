const express=require('express')
const router=express.Router()
const Joi=require('joi')

const scriptListSchema={
    pageNo:Joi.number().integer().min(1).max(10000),
    pageSize:Joi.number().integer().min(1).max(100),
    name:Joi.string()
}

router.use(function(req,res,next){
    console.log(req)
    next()
})

router.post('/',function(req,res){
    console.log(req)
    res.send('接收到请求')
})

