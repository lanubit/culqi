import express from 'express'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/alive', (_req, res) => {
  console.log('llega al requet')
  res.send(true)
})

app.listen(PORT, () => {
  console.log(`Ejecutandose en el puerto ${PORT}`)
})
