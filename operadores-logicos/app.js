const readLine = require('readline').createInterface({
    input :  process.stdin,
    output : process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 e tem habilitação para saber se pode entrar no kart');
console.log('Alem de suas verificações, precisamos verificar se você esta na lista de presenca do horário');

readLine.question("Qual o ano do seu nascimento?", ano => {
    if(ano > 2004){
        console.log('Você não tem 18 anos');
    }else{
        readLine.question("Você tem habilitação? (Sim/Não)", temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Você não tem hablitação para entrar no kart');
            }else{
                readLine.question("Qual é o seu nome?", nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('Bem Vindo ao Kart Douglas');
                            break;
                        case 'Gustavo' :
                            console.log('Bem vindo ao Kart Gustavo');
                            break;
                        default:
                            console.log('Seu nome não foi identificado na lista de presença');
                    }
                })
            }
        })
    }
})