const Express = require('express');

var app = new Express();

app.set('view engine','ejs');

app.use(Express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.render('index');
});

app.listen(process.env.PORT || 3456,()=>{
    console.log('Server is running on PORT:3456...')
});