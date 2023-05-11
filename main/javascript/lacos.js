var exemplo = [
  {
    nome: "Fezinho",
    cpf: "10709631944",
  },
  {
    nome: "AndersonSilva",
    cpf: "76872196432",
  },
  {
    nome: "GuilhermePirezinho",
    cpf: "39189137590",
  },
];

exemplo.forEach((e) => {
    console.log(cpfMask(e.cpf));
});

function cpfMask(cpf) {
    return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(
        6,
        9
    )}-${cpf.substring(9, 11)}`;
}
