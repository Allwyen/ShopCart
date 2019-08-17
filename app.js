const Express = require('express');

var app = new Express();

app.set('view engine','ejs');

app.use(Express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.render('index',{title:'ShopCart'});
});

app.get('/items',(req,res)=>{
    res.render('items',{title:'ShopCart'});
});

app.listen(process.env.PORT || 3456,()=>{
    console.log('Server is running on PORT:3456...')
});