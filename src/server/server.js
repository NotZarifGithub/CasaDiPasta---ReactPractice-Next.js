// importing necessary modules
const express = require('express')

// create an Express app
const app = express()

// define a port number
const port = process.env.PORT || 5000


app.get('/api/data', (req, res) => {
    res.json({ message: 'hello from the expressjs api'})
})

app.listen(port, () => {
    console.log(`Express js server is running on port ${port}`)
})
