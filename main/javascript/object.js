var pessoa = [
    { nome: "GuilhermePirezinho", sexo: "F", idade: 24 },
    { nome: "Fezinn", sexo: "M", idade: 15 },
];

for (var i = 0; i < pessoa.length; i++) {
    if (pessoa[i].sexo === "M") {
        console.log(pessoa[i].sexo);
    }
}