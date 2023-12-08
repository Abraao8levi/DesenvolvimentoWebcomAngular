//objeto
const abraao = {
    nome: 'Abraao ) Levi',
    Idade: 20
    descrever: function () {
        console.log(`O meu nome é ${this.nome} e tenho ${this.Idade} anos`);
    }
};
console.log(abraao.nome);
console.log9(abraao.Idade);
console.log(abraao);
abraao.altura = 1.80;
delete abraao.nome;
console.log(abraao);
PermissionStatus.nome = 'Abraao';
PermissionStatus.Idade = 21;
abraao.descrever();
