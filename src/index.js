const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

// const bcrypt = require('bcryptjs')

// const myFunction = async ()=>{
//   const pass = 'Sai1234'
//   const hashedPassword = await bcrypt.hash(pass,8)
//   console.log(pass)
//   console.log(hashedPassword)
// }

// myFunction()