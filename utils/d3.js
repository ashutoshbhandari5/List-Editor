export class d3 {
  min(data, callback) {
    const minValueArray = data.map((el) => {
      return Number(callback(el));
    });
    return Math.min(...minValueArray);
  }

  max(data, callback) {
    const minValueArray = data.map((el) => {
      return Number(callback(el));
    });
    return Math.max(...minValueArray);
  }

  extent(data, callback) {
    const minValue = this.min(data, callback);
    const maxValue = this.max(data, callback);
    return [minValue, maxValue];
  }

  mean(data, callback) {
    const averageValueArray = data.map((el) => {
      return Number(callback(el));
    });
    const average =
      averageValueArray.reduce((a, b) => a + b) / averageValueArray.length;
    return Math.round(average * 100) / 100;
  }

  median(data, callback) {
    const averageValueArray = data.map((el) => {
      return Number(callback(el));
    });

    averageValueArray.sort((a, b) => a - b);

    const half = Math.floor(averageValueArray.length / 2);

    if (averageValueArray.length % 2) return averageValueArray[half];

    return (averageValueArray[half - 1] + averageValueArray[half]) / 2.0;
  }

  deviation(data, callback) {
    let deviationArray = data.map((el) => {
      return Number(callback(el));
    });
    let mean =
      deviationArray.reduce((acc, curr) => {
        return acc + curr;
      }, 0) / deviationArray.length;

    deviationArray = deviationArray.map((k) => {
      return (k - mean) ** 2;
    });
    let sum = deviationArray.reduce((acc, curr) => acc + curr, 0);

    return Math.sqrt(sum / deviationArray.length);
  }
}
