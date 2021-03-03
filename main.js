//MÉTODO PARA MANIPULAÇÃO DE OBJETOS DO DOMU
// document.getElementById('total') - ID
// document.querySelector('total') - QUALQUER ELEMENTO

const distancia = document.getElementById('distancia');
const qtdPedagios =  document.getElementById('pedagios');
const pedagio = document.getElementById('pedagio');
const total = document.getElementById('total');
const calcular = document.getElementById('calcular');

function calcula(){
    const resultadoPedagios = Number(qtdPedagios.value) * 9.40;
    pedagio.innerText = resultadoPedagios.toFixed(2);

    const resultadoDistancia = Number(distancia.value) * 6.00;
    total.innerText = (resultadoDistancia + resultadoPedagios).toFixed(2);
}

calcular.addEventListener('click', calcula);