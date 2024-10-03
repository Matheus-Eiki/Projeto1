//ESTRUTURA DE REPETIÇÃO
for (let i=0; i<10; i++){
    //console.log(i)
}
//WHILE

let f = 0;
while (f<10){
    //console.log(f)
    f++;
}

//Do while
let w= 0;

do{
    //console.log(w)
    w++;
}
while(w<5);

//funções
//`` (strings literal ou template string ${} chama a variável)
function Ola(nome){
    //console.log(`Seja bem vindo, a ${nome}`)
    //alert(`seja bem vindo a ${nome}`)
    //document.write(`seja bem vindo a ${nome}`)
}
//executando a fun~]ao Ola passando o valor
Ola("FIAP")

//Arrow Function

const hello =()=>(console.log("função arrow function"))

hello()

//ARRAY [], OBJETO {} E METODOS ()

let jogadores =[
    {nome:"Huguinho", idade:17},
    {nome:"Zezinho", idade:18},
    {nome:"Luizinho", idade:19}
]

let listaJogadores = jogadores.map(function(item)  {
    return item.idade;

})
console.log(listaJogadores)