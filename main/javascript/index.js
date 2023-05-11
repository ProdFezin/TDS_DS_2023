var a = [
{
  nomes: ["Jaozinho", "Bem te vi", {}, 123, 1.5, "a"],
},
{
  nomes: ["kikiuiu", "Bem te vi", {}],
},
{
  nomes: ["Yamete", "Bem te vi", {}],
},
{
  nomes: ["Kudasai", "Bem te vi", {}],
},
1,
];

var b = a.length;

try {
a.forEach((data) => {
  data.nomes
    ? console.log(data.nomes[data.nomes.length - 1])
    : console.log(data);
});

} catch (error) {
console.log(
  "Help, deu erro e eu n sei arrumar kekw",
  error.message
);
}