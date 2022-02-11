const express = require('express')
const app = express()
const port = 9238

/*app.get('/',function(req,res) {
    res.sendFile('index.html', { root: __dirname });
  });*/

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
