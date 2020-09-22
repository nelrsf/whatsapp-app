const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const router = express.Router();

app.use(bodyparser.json())

const whatsapp = require('./whatsapp-service');

app.post('/whatsapp/connect', whatsapp.conectApi)
app.post('/whatsapp/sendmessage', whatsapp.sendMessage)

app.listen(8080, ()=> {
    console.log('conected');
})
