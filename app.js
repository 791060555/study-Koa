var koa = require('koa');
var app = koa();


app.use(function *(){
	this.body = 'hello world dgfdgdfgsd';
});

app.listen('3000');