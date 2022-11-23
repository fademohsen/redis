const Queue = require('bull');
const myJobQueue = new Queue('myJob',  'redis://redis:6379');
const express = require('express');
const app = express();


app.post('/job', async (req,res)=> {
    // your stuff 
    try {
        await myJobQueue.add({jobData: 'some data'});
        res.send('Job added');
        
    }catch(err) {
        res.status(500).send
    }
  })

app.listen(3000, () => console.log('Example app listening on port 3000!'))