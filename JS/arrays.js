function task1() {
  let arr = [4, 16, 36, 25];
  let summ = arr.reduce(function (sum, elem) {
    if (elem % 2 == 0) sum += Math.sqrt(elem);
    return sum;
  }, 0);
  alert(summ);
}
