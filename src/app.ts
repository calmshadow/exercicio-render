import fastify from 'fastify'
import cors from '@fastify/cors'
import { error } from 'console'

export const app  = fastify()

app.register(cors, {
  origin: true
})

app.get('/home', ()=> {
  const user = {"nome": "Joao koch"}
  return user
})

app.setErrorHandler((error, request, reply) =>{
  console.error(error)
  reply.status(500).send({ message: 'Internal Server Error' })
})