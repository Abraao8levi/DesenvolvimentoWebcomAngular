/* objeto carro */
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca,cor,gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoDePercurso (distancia, precoCombustivel) {
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }

    
}
const uno = new Carro('fiat',' prata', 1/12);
console.log(uno.calcularGastoDePercurso(70,5));
//uno.ligar();
//console.log(uno.getGasto());
