const express = require('express')

const app = express()

app.get('/api/list',(req,res)=>{
  res.send({list:Array(5).fill(0).map((v,e)=>'element'+e)})
})

app.get('/api/item/:id',(req,res)=>{
  if(req.params.id.substr(0,7) !== 'element'){
    throw Error('takiego wała. nie ma czegos takiego jak '+req.params.id)
  }
  res.send({"text":`tak, to jest element ${req.params.id}`})
})

app.use(express.static('./'))

app.listen(8080)
