# server-in-typescript

node.js express typescript

## on windows 11

- npm init
- npx tsc --init
- git --init
- npm i -D nodemon
- npm install -g ts-node
- npm run start

## read a huge size file using streams

```
import fs from 'fs';

function read() {
   let data = '';
   const readStream = fs.createReadStream('business-data.csv', 'utf-8');
   readStream.on('error', (error) => console.log(error.message));
   readStream.on('data', (chunk) => data += chunk);
   readStream.on('end', () => console.log('Reading complete'));
};

read();


let counter = 0;
   const readStream = fs.createReadStream('business_data.csv', 'utf-8');
   let rl = readline.createInterface({input: readStream})
   rl.on('line', (line) => {
       const year = line.split(',')[2];
       const geo_count = line.split(',')[3];
       if (year === '2020' && geo_count >200) {
           counter++
       }
   });
   rl.on('error', (error) => console.log(error.message));
   rl.on('close', () => {
       console.log(`About ${counter} areas have geographic units of over 200 units in 2020`)
       console.log('Data parsing completed');
   })
}
```
### custer module and multiple CPU cores
In Node.js, you can use the cluster module to create a cluster of worker processes that can share the workload of a single Node.js application. This can be useful if you want to take advantage of multiple CPU cores to improve the performance of your application.
```
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);
}

```


In the example above, the cluster will fork a new worker process for each CPU core on the system. Each worker process will run its own instance of the HTTP server, and the cluster will automatically balance the incoming requests across all of the worker processes.

You can also use the worker.send() function to communicate between the worker processes and the master process. For more information and a complete list of functions and options available in the cluster module, you can refer to the Node.js documentation.