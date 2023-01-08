import Express, { response }  from "express";

// instancia sempre me retorna o produto final produto final 

const app = Express()

// CRUD = CREATE, READ, UPDATE, DELETE 

// read = GET / caminho "/" (main/index) rotal principal
app.get("/", (request, response) => {
    response.send("ola")
})


// ouvindo de porta 
const port = 3000 
app .listen(port, () => {
    console.log("Api online na porta: http://localhost:3000")
})
