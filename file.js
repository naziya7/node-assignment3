const fs = require('fs');
const http = require('http');
fs.writeFile('index.html', '<h1> Hello World! </h1> \n<p> This is Naziya patel here... </p>', (err) => {
    if(err) console.log(err);
    console.log('File is created')
})
const server = http.createServer((req, res) => {
const rstream = fs.createReadStream('index.html', 'utf-8');
rstream.pipe(res);
});
server.listen(5000, ()=> console.log('server is Up'))
