export class d3 {
  constructor() {
    this.nestedData = [];
  }

  getFilteredArrayNumber = (data, name) => data.map((el) => Number(el[name]));

  min(data, name) {
    const minValueArray = this.getFilteredArrayNumber(data, name);
    return Math.min(...minValueArray);
  }

  max(data, name) {
    const minValueArray = this.getFilteredArrayNumber(data, name);
    return Math.max(...minValueArray);
  }

  extent(data, name) {
    const minValue = this.min(data, name);
    const maxValue = this.max(data, name);
    return [minValue, maxValue];
  }

  mean(data, name) {
    const averageValueArray = this.getFilteredArrayNumber(data, name);
    const average =
      averageValueArray.reduce((a, b) => a + b) / averageValueArray.length;
    return Math.round(average * 100) / 100;
  }

  median(data, name) {
    const averageValueArray = this.getFilteredArrayNumber(data, name);

    averageValueArray.sort((a, b) => a - b);

    const half = Math.floor(averageValueArray.length / 2);

    if (averageValueArray.length % 2) return averageValueArray[half];

    return (averageValueArray[half - 1] + averageValueArray[half]) / 2.0;
  }

  deviation(data, name) {
    let deviationArray = this.getFilteredArrayNumber(data, name);
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

  ascending(data, sortBy) {
    const sortedData = [...data].sort((a, b) =>
      a[sortBy] > b[sortBy] ? 1 : -1
    );
    return sortedData;
  }
  descending(data, sortBy) {
    const sortedData = [...data].sort((a, b) =>
      a[sortBy] < b[sortBy] ? 1 : -1
    );
    return sortedData;
  }

  //Nesting and grouping of data
  nest(data) {
    this.nestedData = data;
    return this;
  }

  key(name) {
    const reduceKey = this.nestedData.reduce((storage, item) => {
      const group = item[name].toLowerCase();
      storage[group] = storage[group] || { key: item[name], values: [] };
      storage[group].values.push(item);
      return storage;
    }, {});

    this.nestedData = Object.values(reduceKey);
    return this;
  }

  rollUp(nameOrFunction) {
    const isFunction = typeof nameOrFunction === "function";
    const newData = this.nestedData.map((el, i) => {
      return {
        key: el.key,
        values: isFunction ? nameOrFunction(el.values) : nameOrFunction,
      };
    });
    this.nestedData = newData;
    return this;
  }
}
