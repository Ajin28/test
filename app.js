const express = require('express');
const app = express()
app.use(express.json());

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get('/', (req, res) => {
    console.log("started!")
})

app.post('/', function (req, res) {
    console.log(req);
    //  let action = req.body.queryResult.action; 
    //  console.log(action);
     //let responseJson = {};
     //responseJson.fulfillmentText = 'Hit the webhook!'; // displayed response
    var responseJson= {
        "fulfillmentMessages": [
          {
            "text": {
              "text": [
                "Text response from webhook"
              ]
            }
          }
        ]
      }
    res.send(responseJson)

})
