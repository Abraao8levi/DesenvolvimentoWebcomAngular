/*  faça um programa para calcular o valor de uma viagem.
 Você terá 5 variáveis. Sendo elas ;
 1- Preço etanol;
 2-  preço gasolina;
 5- Gasto médio do combustível do carro por km;
 5- Distância em km da viagem;
 */
// imprima no console o valor que será gasto para realizar viagem.
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmMLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const listrosConsumidos = distanciaEmKm / kmMLitros;

if (tipoCombustivel === 'Etanol') {
const valorGasto = listrosConsumidos * precoEtanol;
console.log(valorGasto.toFixed(2)); //  serve para duas casas decimais
} else {
 const valorGasto = listrosConsumidos * precoGasolina;
 console.log(valorGasto.toFixed(2)); //  serve para duas casas decimais
}




