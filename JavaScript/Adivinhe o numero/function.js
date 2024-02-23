document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btn');
    const tentativas = 3; // Definindo 3 tentativas
    let tentativasFeitas = 0; // Inicializando o número de tentativas feitas como 0

    const numero_secreto = Math.floor(Math.random() * 10) + 1;
    const resultado = document.getElementById('resultado');

    function verificarChute(event) {
        event.preventDefault();

        if (tentativasFeitas < tentativas) {
            const chute = parseInt(document.getElementById('chute').value); // Obtendo o valor do chute como um número inteiro

            if (chute < 1 || chute > 10) {
                resultado.textContent = 'Por favor, insira um número válido entre 1 e 10.';
            } else {
                const acertou = chute === numero_secreto;
                const maior = chute > numero_secreto;

                if (acertou) {
                    resultado.textContent = `Parabéns, você acertou! O número secreto era ${numero_secreto}.`;
                } else {
                    tentativasFeitas++; // Incrementando o número de tentativas feitas
                    resultado.textContent = `Tentativa ${tentativasFeitas} de ${tentativas}:`;
                    if (maior) {
                        resultado.textContent += ` O número secreto é menor!`;
                    } else {
                        resultado.textContent += ` O número secreto é maior!`;
                    }
                }

                if (tentativasFeitas === tentativas) {
                    resultado.textContent = `Você excedeu o número de tentativas. O número secreto era ${numero_secreto}.`;
                    btn.disabled = true; // Desabilitando o botão de tentativa após o término do jogo
                }
            }
        }
    }

    btn.addEventListener('click', verificarChute);

    const tentar_nova = document.getElementById('tentar_nova');
    tentar_nova.addEventListener('click', function () {
        // Reiniciando o jogo ao clicar no botão "Tentar Novamente"
        tentativasFeitas = 0;
        resultado.textContent = '';
        document.getElementById('chute').value = ''; // Limpando o campo de entrada
        btn.disabled = false; // Habilitando o botão de tentativa
        numero_secreto = Math.floor(Math.random() * 10) + 1; // Gerando um novo número secreto
    });
});

