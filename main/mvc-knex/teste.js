const minhaPromessa = new Promise((resolve, reject) => {
  const resultado = 1 + 1;
  setTimeout(() => {
    if (resultado == 2) {
      resolve("O resultado é = a 2");
    } else {
      reject("O resultado não é = a 2, F*deo");
    }
  }, 1000);
});

async function main() {
  console.log("Startou");

  await minhaPromessa
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log("cabou");
}

main();
