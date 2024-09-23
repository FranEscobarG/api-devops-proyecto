import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes'
import { connectDB } from './config/db';

dotenv.config()

const app = express()
connectDB();
app.use(cors())
app.use(express.json())

app.use('/api/v1/usuarios', userRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export { app }; 
