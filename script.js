const button = document.getElementById('button');
const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const resultado = document.getElementById('resultado');
const numberImc = document.getElementById('valor-imc');


const getText = (imc) => {
    if(imc > 40) return 'Obesidade grau III'
    if(imc > 35) return 'Obesidade grau II'
    if(imc > 30) return 'Obesidade grau I'
    if(imc > 25) return 'Sobrepeso'
    if(imc > 18.5) return 'Peso ideal'
    return 'Abaixo do peso'
}

 altura.addEventListener('input', function (e) {
            // 1. Remove tudo que não for número (limpa pontos/vírgulas anteriores)
            let value = e.target.value.replace(/\D/g, '');

            // 2. Se houver pelo menos um número
            if (value.length > 1) {
                // Insere o ponto após o primeiro dígito
                // Ex: "165" vira "1" + "." + "65"
                value = value.slice(0, 1) + '.' + value.slice(1);
            }

            // 3. Atualiza o valor do input em tempo real
            e.target.value = value;
        });

const formatarAltura = (valor) => {
    valor = valor.replace(/\D/g, '');
    if (!valor) return 0;
    valor = valor.slice(0, 3);
    return Number(valor) / 100;
};

altura.addEventListener('blur', () => {
    const valor = formatarAltura(altura.value);
    if (valor) altura.value = valor.toFixed(2);
    
});

const imcCalc = () => {
    if(!altura.value || !peso.value)  
    return resultado.textContent = "Preencha todos os campos!", numberImc.innerText = " ";

    const alturaFormatada = formatarAltura(altura.value);
    const pesoFormatado = Number(peso.value.replace(',', '.'));
    

    const valorImc = (pesoFormatado / (alturaFormatada ** 2)).toFixed(1);

    resultado.textContent = getText(valorImc);
    numberImc.textContent = `IMC = ${valorImc}`;
}

button.addEventListener('click', imcCalc)