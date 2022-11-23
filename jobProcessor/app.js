const Queue = require('bull');
const myJobQueue = new Queue('myJob',  'redis://redis:6379');
const express = require('express');
const app = express();

myJobQueue.process(function(job,done){
    // your job complex operations 
    console.log(job.data.jobData)
    done();
  })

app.listen(5000, () => console.log('Example app listening on port 3000!'))
