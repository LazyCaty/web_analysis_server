const router = require('koa-router')()
const mongoose = require('mongoose')
const baseUrl = 'mongodb://localhost/web_analysis'
const country = require('../modals/country')
mongoose.connect(baseUrl,{useNewUrlParser:true,useUnifiedTopology:true})
/**
 * 按国家名字查询
 */
router.post('/', async (ctx) => {
  try {
    const data = await country.find({'data.country': ctx.request.body.country});
    ctx.status = 200;
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.body = data;
}catch (e) {
    console.log('加载数据失败')
}
})

module.exports = router
