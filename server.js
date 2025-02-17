import express from 'express'

import publicRoutes from './routes/public.js'


const app = express()

app.use(express.json())


app.use('/', publicRoutes);

app.get('/', (req,res) => {
    res.send('Welcome to express framework')
})


app.listen(3000, () => {
    console.log(`Server running at http://localhost`)
})