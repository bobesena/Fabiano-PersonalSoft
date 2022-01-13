// instanciando um objeto
//segundo documento


var obj = {p1: 0, p2: 1, p3: 2, p4: 3, p5: 4, p6: 5}; // criando um objeto por meio de um inicializador de objeto, forma como o Fabiano demonstrou no exercicio.


function funcao1(){ // funcao pega o valor do primeiro input e adiciona ao 
    obj.p1 = document.querySelector("#propriedade1");
    obj.p1 = obj.p1.value;
    console.log(obj.p1);
    console.log("clicou");
    return obj.p1;
}

function funcao2(){
    obj.p2 = document.querySelector("#propriedade2");
    obj.p2 = obj.p2.value;
    console.log(obj.p2);
    console.log("clicou");
    return obj.p2;
}

function funcao3(){
    obj.p3 = document.querySelector("#propriedade3");
    obj.p3 = obj.p3.value;
    console.log(obj.p3);
    console.log("clicou");
    return obj.p3;
}

function funcao4(){
    obj.p4 = document.querySelector("#propriedade4");
    obj.p4 = obj.p4.value;
    console.log(obj.p4);
    console.log("clicou");
    return obj.p4;
}

function funcao5(){
    obj.p5 = document.querySelector("#propriedade5");
    obj.p5 = obj.p5.value;
    console.log(obj.p5);
    console.log("clicou");
    return obj.p5;
}

function funcao6(){
    obj.p6 = document.querySelector("#propriedade6");
    obj.p6= obj.p6.value;
    console.log(obj.p6);
    console.log("clicou");
    return obj.p6;
}

function fim(){

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

myChart = new Chart(
    document.getElementById('myChart'),
    config
);
};


function ApagaEcria(){
    if(window.myChart instanceof Chart)
    {
        window.myChart.destroy();
    }
}


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