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
}
