// create web server with express
const express = require('express');
const app = express();
// create a port
const port = 3000;
// import comments
const comments = require('./comments');
// import body-parser
const bodyParser = require('body-parser');
// import cors
const cors = require('cors');
// use body-parser
app.use(bodyParser.json());
// use cors
app.use(cors());
// create a route
app.get('/', (req, res) => {
    res.send('Welcome to my JSON server!');
});
// create a route
app.get('/comments', (req, res) => {
    res.json(comments);
});
// create a route
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === req.params.id);
    res.json(comment);
});
// create a route
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        body: req.body.body,
        postId: req.body.postId
    };
    comments.push(comment);
    res.json(comment);
});
// create a route
app.put('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === req.params.id);
    comment.body = req.body.body;
    comment.postId = req.body.postId;
    res.json(comment);
});
// create a route
app.delete('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === req.params.id);
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.json(comment);
});
// start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
