const solution = (st1, st2) => {
  let array1 = st1.split("");
  let array2 = st2.split("");
  let contador = 0;
  array2.forEach(item => {
    if (array1.includes(item)) {
      contador++;
    }
  });
  return contador;
};
console.log(solution("aabcc", "adcaa"));
