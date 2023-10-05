// create web server
// run the server: node comments.js
// test the server: http://localhost:3000/comments?postId=1

// import the http module
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const comments = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: '