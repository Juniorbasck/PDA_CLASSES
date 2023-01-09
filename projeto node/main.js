import Express, { request, response }  from "express";

// instancia sempre me retorna o produto final produto final 

const app = Express()

//middlewares = meio de compo 
app.use(Express.json()) 

// Gargalho - para quando está acontecendo muitas resqusições
app.use((request, response, next) =>{
    next()
})

//simular dados 
const bd_usarios = []


// CRUD = index
// CRUD = CREATE, READ, UPDATE, DELETE 

// read = GET / caminho "/" (main/index) rota principal
app.get("/", (request, response) => {
    response.json(bd_usarios)
})

// create = POST 
app.post("/", (request, response) => {

    bd_usarios.push(request.body)
    response.send(`usuario ${request.body.nome} foi criado com sucesso`)

})

// Update = PUT
app.put("/:id", (request, response) => {
    const id = Number(request.params.id);

    bd_usarios.map((elemento, index) => {

        if(elemento.id === id){
            bd_usarios.splice(index, 1, request.body)
        }
    });

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
