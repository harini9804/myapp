var express = require('express');
var app = express();
var path = require('path');
var request1 = require('request');
var request2 = require('request');
var bodyParser =  require('body-parser');
var cookieParser = require('cookie-parser');
var axios = require('axios');

app.use(cookieParser());

var urlencodedParser = bodyParser.urlencoded({
	extended: true
})

app.get('/',function(req,res){
	
	res.send('Hello World - Harini');
});

app.listen(8080,function(){
	console.log('App is listening on port 8080');
});


var userarr,postarr,userlen,postlen,i,j;

app.get('/authors',function(req,res){

	axios.all([
    axios.get('https://jsonplaceholder.typicode.com/users'),
    axios.get('https://jsonplaceholder.typicode.com/posts')
  ])
  .then(axios.spread(function (userResponse, postResponse) {
    //... but this callback will be executed only when both requests are complete.
    userarr = userResponse.data;
    postarr= postResponse.data;
    userlen = userarr.length;
    postlen = postarr.length;

    var count = new Array(userlen);

    for(i=0;i<userlen;i++) 
	{
					count[i]=0;
	}

	for(i=0;i<userlen;i++)
	{
		for(j=0;j<postlen;j++)
		{
			if(userarr[i].id===postarr[j].userId)
				{
							count[i]=count[i]+1;
				}
		}
	}

	res.write('<html><head></head><body>');
				 res.write('<p>');
				 
				 res.write('Here is a list of users and the number of posts they have written.<br>');

				 for(var i=0;i<count.length;i++)
		  			res.write(userarr[i].name + ' ---> '+count[i]+'<br>');

		  		res.write('</p>');
		  		res.end('</body></html>');

  }));

});
	


app.get('/setcookie',function(req,res){

	res.cookie('name','Harini');
	res.cookie('age','19');

	res.send('Cookies are set!');

});

app.get('/getcookies',function(req,res){

	res.write('<html><head></head><body>');
	res.write('<p> The cookies set are: <br>');

	res.write(" Name : " + req.cookies.name + '<br>');  
	res.write(" Age : " +req.cookies.age + '<br>');

	res.write('</p>');

  	res.end('</body></html>');

});


app.get('/robots.txt',function(req,res){

	res.status(401).sendFile(path.join(__dirname,'ui','robots.html'));  //Response status set to "Unauthorized" and a html file is sent

});

app.get('/html',function(req,res){

	res.sendFile(path.join(__dirname,'ui','sample.html'));  // A sample html file is sent as response
});

app.get('/input',function(req,res){

	res.sendFile(path.join(__dirname,'ui','input.html'));  // A html file with an input field to get data
});




app.post('/data',urlencodedParser,function(req,res){

	console.log(req.body.name); //  the data received from /input is logged to stdout

	res.send(req.body.name);
});
