
exports.min = function min(array) {
  return (typeof array == "undefined" || array.length <= 0) ? 0
    : array.reduce((min, current) => {
      return (min < current) ? min : current;
    });
}

exports.max = function max(array) {
  return (typeof array == "undefined" || array.length <= 0) ? 0
    : array.reduce((max, current) => {
      return (max > current) ? max : current;
    });
}

exports.avg = function avg(array) {
  if (typeof array == "undefined" || array.length <= 0) {
    return 0;
  } else {
    let total = 0;
    let average = 0;

    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return average = total / array.length;
  }
}
