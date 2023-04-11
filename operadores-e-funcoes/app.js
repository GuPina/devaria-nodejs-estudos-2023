const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) => {
    try{
        return number2 = Number.parseFloat(numero);
    } catch(e){
        console.log()
        console.log('Numero informado não é valido');
    }
}

const validarOperador = (operador) => {
    switch(operador){
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('Operador informado e invalido');
            return null;
    }
}

readLine.question('Favor informar um numero:', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);

    if(numeroValidado1){
        readLine.question('Favor informar outro numero:', (numero2) =>{
            const numeroValidado2 = validarNumeroInformado(numero2);  
            
            if(numeroValidado2){
                readLine.question('Favor informar o operador:', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if(operadorValidado){
                        switch(operadorValidado){
                            case '+' : console.log(`operador selecionado adição resultado ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`)
                                break;
                            case '-' : console.log(`operador selecionado subração resultado ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`)
                                break;
                            case '/' : console.log(`operador selecionado divisão resultado ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`)
                                break;
                            case '*' : console.log(`operador selecionado multiplicação resultado ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`)
                                break;
                            case '%' : console.log(`operador selecionado modulo resultado ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`)
                                break;
                            default: break;
                        }
                    }
                });
            }
        });
    }
})