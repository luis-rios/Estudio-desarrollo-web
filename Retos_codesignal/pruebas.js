const solution = (st1, st2) => {
  let array1 = st1.split("").sort();
  let array2 = st2.split("").sort();
  let contador = 0;

  for (let i = 0; i < array1.length; i++) {
    const item = array1[i];
    const index = array2.indexOf(item);

    if (index !== -1) {
      contador++;
      array2.splice(index, 1);
    }
  }

  return contador;
};

console.log(solution("aabcc", "adcaa"));
