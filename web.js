const express = require('express')
const app = express()
const fs = require('fs')

app.get('/', (req, res) => res.send('Hello World!'))

//var content
app.get('/dump', function(req, res) {

	fs.readFile('log.txt', 'utf8', function (err, data) {
		if(err) throw err
		//console.log("%j", req.query)
		//content = data
		console.log(data)
		res.end(data)
});	
})


var seq = 0
app.get('/logging', function(req, res) {
	
	fs.appendFile('log.txt', JSON.stringify(req.query)+"\n", function (err) {
		if(err) throw err
		console.log("%j", req.query)
		res.end("Got "+ String(seq++) +" "+ JSON.stringify(req.query))
});
})

app.listen(8080, () => console.log('Example app listening on port 8080!'))

