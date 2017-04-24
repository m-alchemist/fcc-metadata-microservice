var express=require('express');

var bodyParser=require('body-parser');

var cors=require('cors');

var multer=require('multer');

var upload=multer({dest:'uploads/'});

var app=module.exports=express();

var port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname +'/public'));
app.post('/upload', upload.single('file'), function(req, res, next){
return res.json(req.file);
})
app.listen(port,function(){
  console.log('listening on port '+port);
});
