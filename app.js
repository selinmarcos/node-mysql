const express = require("express")
const cors = require('cors')
const db = require('./database/db.js') 
const Routes = require('./routes/routes.js')

const app = express()
app.use(cors({

    credentials: true,
    // origin: ['http://localhost:8000', 'http://localhost:8080'] // LOCAL
    // origin: ['https://invoicing-wmb.herokuapp.com', 'http://localhost:8080'] //CLOUD-LOCAL
    origin: ['http://localhost:3000', 'http://localhost:8080'] //CLOUD
}))
app.use(express.json())
app.use('/api', Routes)

const conexion = async ()=>{
    try {
        await db.authenticate()
        console.log("CONEXION EXITOSA")
    } catch (error) {
        console.log(`ERROR AL CONECTAR, EL ERROR ES: ${error}`)
    }

}
conexion()



app.get('/', (req, res) =>{
    res.send('Hello world')
})

// app.listen(8000, ()=>{
//     console.log("Server runing in 8000")
// })
// app.listen(process.env.PORT || 8000)
app.listen()