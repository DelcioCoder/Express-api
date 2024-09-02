import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

//create a new route
const router = express.Router()

const prisma = new PrismaClient();


router.post('/signup',async (req, res) => {
    try {
        const user = req.body

        // gerar o salto do hash com bcrypt 
        const salt = await bcrypt.genSalt(10)

        // gerar o hash com bcrypt
        const hashedPassword = await bcrypt.hash(user.password, salt)
        // create a new user into my db
        const newUser = await prisma.user.create({ //create a new user from my db
            data:{
                email:"cleusio@gmail.com",
                name:"cleusio",
                password:hashedPassword, //hashed password from above step
            }
        })
        res.status(201).json(newUser) // success response from server
    } catch (e){
        res.status(500).json({ message: "Erro no servidor,tente novamente!"}) // error response from server
    }
  
    
})


router.get('/login', (req, res) => {
    res.send('Login page')
})


export default router