/*
Agora, para testar seus conhecimentos em lógica computacional utilizando conceitos de entradas e saídas, atribuição de variáveis e concatenação de Strings, vamos desenvolver uma solução algorítmica que simule o comportamento de um agendamento de pagamento. Buscando auxiliar os clientes de um sistema bancário a agendar seus pagamentos recorrentes, o programa deverá solicitar ao usuário informações sobre a conta a ser paga, como o nome do beneficiário, o valor da conta a ser paga e a data de vencimento. Em seguida, o programa fornecerá uma mensagem de confirmação do agendamento com as informações fornecidas.

Entrada
O programa deve solicitar as seguintes informações:

Nome do beneficiário.

Valor a ser pago (em reais, sem casas decimais).

Data de vencimento no formato "DD/MM/AAAA" (Dia, Mês e Ano separados por barras).

Saída
A saída deverá fornecer uma mensagem de confirmação, informando ao cliente que o agendamento foi realizado com sucesso. A mensagem deve conter as informações fornecidas pelo usuário de forma concatenada. O formato da mensagem de saída deve ser:

"Pagamento Agendado! Valor: R$ [Valor da Conta], vencimento [Data de Vencimento]."

*/

let nomeBeneficiario;
let valorConta;
let dataVencimento;

// Neste bloco, temos as funções gets para ler os valores de entrada:
nomeBeneficiario = gets();
valorConta = parseInt(gets()); // Alterado para parseInt para remover casas decimais
dataVencimento = gets();

// Imprima a saída adequada utilizando o conceito de template strings:
print(`Pagamento Agendado! Valor: R$ ${valorConta}, vencimento ${dataVencimento}.`);

