// Create web server
const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto') // Generate random string
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

// Create a comments object
const commentsByPostId = {}

// Create a route for getting comments
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || [])
})

// Create a route for creating comments
app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex') // Generate random string
  const { content } = req.body // Get the content from the request body

  // Get the comments array for the given post id
  const comments = commentsByPostId[req.params.id] || []

  // Add the new comment to the comments array
  comments.push({ id: commentId, content })

  // Update the comments array for the given post id
  commentsByPostId[req.params.id] = comments

  // Send the new comment back to the user
  res.status(201).send(comments)
})

// Create a port for the server
app.listen(4001, () => {
  console.log('Listening on 4001')
})