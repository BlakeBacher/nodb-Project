const express = require ('express');
const ctrl = require('./controllers/controller')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())


app.get('/api/carList', ctrl.goGetTheCars)
app.post('/api/addCar', ctrl.addCar)
app.delete('/api/deleteCar/:id', ctrl.deleteCar )
app.put('/api/updateCar/:id', ctrl.updateCar)


const PORT=3005;
app.listen (PORT, () => {
    console.log('listening on port: ' + PORT)
});