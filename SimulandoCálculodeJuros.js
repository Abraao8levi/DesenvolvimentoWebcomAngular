/* Demonstre como aplicar conceitos de lógica de programação como validação de dados, entradas e saídas, cálculos e condicionais. Então, desenvolva uma solução algorítmica para o cálculo de juros simples em uma corporação bancária, onde, o programa deve solicitar como entrada o capital inicial, a taxa de juros e o período de tempo em meses. Em seguida, deverá ser retornado o montante final a ser pago, incluindo os juros, e fornecer o resultado.

Condições dos Juros Simples:

Juros Simples (JS) = (Capital Inicial * Taxa de Juros * Período de Tempo) / 100
Montante Final (MF) = Capital Inicial + Juros Simples

Entrada
O programa deve solicitar as seguintes informações:

Capital inicial (em reais, com até 2 casas decimais).

Taxa de juros (em porcentagem, sem o símbolo de porcentagem).

Período de tempo em meses (um número inteiro).

Saída
O programa deverá fornecer uma mensagem que informa o montante final a ser pago, incluindo juros. A mensagem deve conter o capital inicial, a taxa de juros, o período de tempo e o montante final. O formato da mensagem de saída deve ser:

"Montante em [Período de Tempo], com R$ [Capital Inicial], [Taxa de Juros]%, e: R$ [Montante Final]."
*/
// Entrada dos valores com a função gets():
const capitalInicial = parseFloat(gets());
const taxaJurosInput = gets(); // Lê a entrada como string
const tempoMeses = parseInt(gets());

// Verifica se os valores de entrada são válidos
if (!isNaN(capitalInicial) && !isNaN(tempoMeses) && tempoMeses > 0) {
    // Verifica se a entrada da taxa de juros é válida
    const taxaJuros = parseFloat(taxaJurosInput.replace('%', '')); // Remove o símbolo de percentagem
    if (!isNaN(taxaJuros)) {
        // Calcula o montante usando a fórmula de juros simples
        const jurosSimples = (capitalInicial * taxaJuros * tempoMeses) / 100;
        const montanteFinal = capitalInicial + jurosSimples;

        // Imprime o resultado com formatação
        // Utiliza toFixed(2) para garantir até duas casas decimais
        print(`Montante em ${tempoMeses} meses, com R$ ${capitalInicial.toFixed(2)} iniciais, ${taxaJuros.toFixed(0)}% juros, e: R$ ${montanteFinal.toFixed(2)}.`);
    } else {
        print('Por favor, insira valores válidos para a taxa de juros.');
    }
} else {
    print('Por favor, insira valores validos e um periodo de tempo adequado.');
}
