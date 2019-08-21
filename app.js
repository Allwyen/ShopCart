const Express = require("express");
const Mongoose = require('mongoose');

var request = require('request');
var bodyParser = require('body-parser');

//Now creating a object for class Express called app

var app = new Express();

//Adding a middleware.EJS template engine

app.set('view engine','ejs'); 

app.use(Express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

Mongoose.connect("mongodb+srv://mongodb:mongodb@mycluster-ucvz5.mongodb.net/shopcartdb?retryWrites=true&w=majority");

const MobileModel= Mongoose.model("mobile",{
    mname:String,
    mprice:String,
    mdesc:String,
    mreview:String,
});


items=[{
    'name':'Apple 6S',
    'image':'/images/apple6s.jpg',
    'price': 'Rs. 28,999',
    'desc': 'The phone comes with a 4.70-inch touchscreen display with a resolution of 750x1334 pixels at a pixel density of 326 pixels per inch (ppi) and an aspect ratio of 16:9. Apple iPhone 6s is powered by a 1.84GHz dual-core A9 processor. It comes with 2GB of RAM.',
    'feedback':["Just to remember you that this phone is 4 years old, one of the best for 2015. Don't compare 2015 technology with today's standards.","also me i just got one 2 days ago and yes its worth it","Even today it is a fast and solid phone. Still runs the current versions of iOS. The battery life is not phenomenal and never was. But other than that it is still a very good phone as a daily driver."]
},{
    'name':'Galaxy A30',
    'image':'/images/galaxya30.jpg',
    'price': 'Rs. 15,490',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
},{
    'name':'Galaxy A80',
    'image':'/images/galaxya80.jpg',
    'price': 'Rs. 47,990',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]

},{
    'name':'Galaxy Note 10',
    'image':'/images/galaxynote10.jpg',
    'price': 'Rs. 79,999',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
},{
    'name':'Galaxy S9',
    'image':'/images/galaxys9.jpg',
    'price': 'Rs. 47,699',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
},{
    'name':'Galaxy S10',
    'image':'/images/galaxys10.jpg',
    'price': 'Rs. 61,990',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
},{
    'name':'HTC X',
    'image':'/images/htcx.jpg',
    'price': 'Rs. 32,099',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
},{
    'name':'Iphone X',
    'image':'/images/iphonex.jpg',
    'price': 'Rs. 66,199',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
},{
    'name':'Nokia Lumia 920',
    'image':'/images/lumia920.jpg',
    'price': 'Rs. 28,999',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
},{
    'name':'One plus 6',
    'image':'/images/oneplus6.jpg',
    'price': 'Rs. 34,999',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
},{
    'name':'One plus 6T',
    'image':'/images/oneplus6t.jpg',
    'price': 'Rs. 27,999',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
},{
    'name':'One plus 7',
    'image':'/images/oneplus7.jpg',
    'price': 'Rs. 32,999',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
},{
    'name':'Oppo F7',
    'image':'/images/oppof7.jpg',
    'price': 'Rs. 17,490',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
},{
    'name':'Oppo F11',
    'image':'/images/oppof11.jpg',
    'price': 'Rs. 16,999',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
},{
    'name':'Realme 3 pro',
    'image':'/images/realme3pro.jpg',
    'price': 'Rs. 12,999',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
},{
    'name':'Realme X',
    'image':'/images/realmex.jpg',
    'price': 'Rs. 17,990',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
},{
    'name':'Redmi K20',
    'image':'/images/redmik20.jpg',
    'price': 'Rs. 21,990',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
},{
    'name':'Redmi Note 7',
    'image':'/images/redminote7.jpg',
    'price': 'Rs. 13,599',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
},{
    'name':'Vivo S1',
    'image':'/images/vivos1.jpg',
    'price': 'Rs. 17,990',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
},{
    'name':'Vivo V15',
    'image':'/images/vivov15.jpg',
    'price': 'Rs. 19,990',
    'desc': 'The Samsung Galaxy A30 features a 6.4-inch full HD+ (1080x2340 pixels) Super AMOLED Infinity-U display with 19.5:9 aspect ratio. Internally, the smartphone packs an Exynos 7904 octa-core SoC, paired with 4GB of RAM and 64GB of inbuilt storage. ... Samsung has stuffed in a 4,000mAh battery',
    'feedback': ["All are same as long as your SAMSUNG Galaxy A30 is an authorized device from SAMSUNG Indonesia.","Buy A30 it is pretty good and you won't believe battery.","A30 doesn't have an adjustable AoD brightness feature, so it keeps changing because it only has auto-brightness."]
}];

app.get('/',(req,res)=>{
    res.render('index',{title:'Shop Cart'});
});

app.get('/items',(req,res)=>{
    res.render('items',{title:'Shop Cart',item:items});
});

app.get('/itemsingle/:id',(req,res)=>{
    const x = req.params.id;
    res.render('itemsingle',{title:'Shop Cart',item:items[x]});
});

app.get('/addmobile',(req,res)=>{
    res.render('addmobile');
});

app.post('/read',(req,res)=>{
    //var items=req.body;
    //res.render('read',{item:items});

    var mobile = new MobileModel(req.body);
    var result = mobile.save((error,data)=>{
        if(error)
        {
            throw error;
            res.send(error);
        }
        else
        {
            res.send("<script>alert('Mobile Successfully Inserted')</script><script>window.location.href='/addmobile'</script>");
        }
    });

});

app.get('/mobileall',(req,res)=>{

    var result = MobileModel.find((error,data)=>{
        if(error)
        {
            throw error;
            res.send(error);
        }
        else
        {
            res.send(data);
        }
    });
});

const APIurl = "http://shoppingapp-allwyen.herokuapp.com/mobileall";

app.get('/viewmobile',(req,res)=>{

    request(APIurl,(error,response,body)=>{
        var data = JSON.parse(body);
        res.render('viewmobile',{data:data});
    });
});

app.listen(process.env.PORT || 3456,()=>{
    console.log('Server is running on PORT:3456...')
});