// instanciando um objeto


var obj = {p1: 0, p2: 1, p3: 2, p4: 3, p5: 4, p6: 5}; // criando um objeto por meio de um inicializador de objeto, forma como o Fabiano demonstrou no exercicio.

function evento(){

var botaoProp1 = document.getElementById("pr1");
var botaoProp2 = document.getElementById("pr2");
var botaoProp3 = document.getElementById("pr3");
var botaoProp4 = document.getElementById("pr4");
var botaoProp5 = document.getElementById("pr5");
var botaoProp6 = document.getElementById("pr6");


botaoProp1.addEventListener('click', () => {
    obj.p1 = document.querySelector("#propriedade1");
    obj.p1 = obj.p1.value;
    console.log(obj.p1);
    console.log("clicou");
})

botaoProp2.addEventListener('click', () => {
    var objeto2 = document.querySelector("#propriedade2");
    console.log(objeto2.value);
    console.log("clicou");
})


botaoProp3.addEventListener('click', () => {
    var objeto3 = document.querySelector("#propriedade3");
    console.log(objeto3.value);
    console.log("clicou");
})

botaoProp4.addEventListener('click', () => {
    var objeto4 = document.querySelector("#propriedade4");
    console.log(objeto4.value);
    console.log("clicou");
})

botaoProp5.addEventListener('click', () => {
    var objeto5 = document.querySelector("#propriedade5");
    var valor5 = objeto5.value;
    console.log(objeto5.value);
    console.log("clicou");
})

botaoProp6.addEventListener('click', () => {
    var objeto6 = document.querySelector("#propriedade6");
    console.log(objeto6.value);
    console.log("clicou");
 })
};
function tabela(){

const labels = [
    'p1',
    'p2',
    'p3',
    'p4',
    'p5',
    'p6',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [obj.p1,obj.p2,obj.p3,obj.p4,obj.p5,obj.p6,],
    }
    ]
};
const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
};
evento();
tabela();

/*
var xicara = newObject(); //objeto xicara eh instanciado

//apartir desse momento eh dado propriedades ao objeto xicara
xicara.cor = "vermelha"; 
xicara.material = "transparente";
xicara.textura = "papel de parede";
xicara.peso = "100 gramas";
xicara.corSecundaria = "verde";
xicara["formato"] = "circular";
*/