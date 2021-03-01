//MÉTODO PARA MANIPULAÇÃO DE OBJETOS DO DOMU
// document.getElementById('total')
// document.querySelector('total')

const distancia = document.getElementById('distancia');
const qtdPedagios =  document.getElementById('pedagios');
const calcular = document.getElementById('calcular');
const pedagio = document.getElementById('pedagio');
const total = document.getElementById('total')

function calculaPedagio(){
    const resultadoP = Number(qtdPedagios.value) * 9.40;
    pedagio.innerText = resultadoP.toFixed(2);
}

calcular.addEventListener('click', calculaPedagio);

function calculoTotal(){
    const resultadoTotal = Number(distancia.value) * 6.00;
    total.innerText = resultadoTotal.toFixed(2);
}

calcular.addEventListener('click', calculoTotal);
