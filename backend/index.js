import app from './app.js'
import dotenv from 'dotenv'
import { databaseConnection } from './connection.js'


dotenv.config({path: './.env'})
const PORT = process.env.PORT || 8000



databaseConnection(process.env.MONGO_URI);

app.listen(PORT, ()=>{
    console.log(`Server runing on port: ${port}`)
})

