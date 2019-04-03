const bodyParser = require('body-parser');
const express = require('express');
const Blockchain = require('./blockchain');

const app = express();
const blockchain = new Blockchain();

app.use(bodyParser.json());

app.get('/api/v1/blocks', (req, res) =>{
    res.json(blockchain.chain);
});

app.post('/api/v1/mine', (req,res) => {
    const { data } = req.body;

    blockchain.addBlock({ data });

    res.redirect('/api/v1/blocks');
});

const PORT = 3000;
app.listen(3000, () => console.log(`listening at localhost: ${PORT}`));