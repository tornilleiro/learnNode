/**
 * Created by David Perez Perez on 21/02/2017.
 */
var express=require("express");
var app=express();
app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));
app.get('/',function (req,res) {
    res.send('Hello world');
});
app.listen(3000,function (){
    console.log('Chat Application is runing on 3000 port');

});
