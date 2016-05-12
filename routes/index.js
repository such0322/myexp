/**
 * Created by ZHON020 on 2016/5/11.
 */
var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    //res.render('index', { title: 'Express' });
    //console.log("/1");
    next({test:"abc",other:"111"});
})
router.use(function(aaa, req, res, next) {
    console.log("/2");
    console.log(res);
    res.render('index', { title: 'Express',content1: 'content1' });
    //next({test:"222",other:"333"});
});
//router.use(function(aaa, req, res, next) {
//    console.log("/3");
//    res.render('index', { content2: 'qweqweqsddasd' });
//    console.log(aaa);
//});

module.exports=router;