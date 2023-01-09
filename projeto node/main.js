import Express, { response }  from "express";

// instancia sempre me retorna o produto final produto final 

const app = Express()

//middlewares = meio de compo 
app.use(Express.json()) 

// CRUD = index
// CRUD = CREATE, READ, UPDATE, DELETE 

// read = GET / caminho "/" (main/index) rota principal
app.get("/", (request, response) => {
    response.send("ola")
})

// create = POST 
app.post("/", (request, response) => {

    response.send(`usuario ${request.body.nome} foi criado com sucesso`)

})

// Update = PUT
app.put("/", (request, response) => {
    response.send("Usuario atulizado")
})

// Delete = delete 
app.delete("/", (request, response) => {
    response.send("usuario deletado")   
})



// ouvindo de porta 
const port = 3000 
app .listen(port, () => {
    console.log("Api online na porta: http://localhost:3000")
})
