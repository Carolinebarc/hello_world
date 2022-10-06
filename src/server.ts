import * as express from 'express'; 

const app = express(); 
const port = 3000


app.get ('/', (request,response) => {; // rota padrão
    response.send('Hello Word');
})

app.get ('/BSMs', (request,response) => {; // rota padrão
    response.send('Hello Word <br> *Persistência <br>'+
    '*Responsabilidade Pessoal <br> *Orientação ao Futuro <br> *Mentalidade de Crescimento <br>');
})

app.get ('/BSMs/Objetivos_de_aprendizagem_da_semana', (request,response) => {; // rota padrão
    response.send('Hello Word <br> *Persistência <br> *Responsabilidade Pessoal <br> *Orientação ao Futuro <br>'+
    '<br>*Mentalidade de Crescimento <br> Em Hard Skills aprendi sobre Banco de Dados no MySQL e Node Express <br>'+
    'Em Soft Skills pratiquei Persistência, Atenção aos detalhes e Comunicação');
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}!`)


}); 

