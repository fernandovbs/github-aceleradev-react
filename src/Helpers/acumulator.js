export const acumulateByYear = (array, prop) => {
  let acumulator = {};
  array.map(item => {
    let internalAcumulator = new Date(item[prop]).getFullYear();

    acumulator = {
      ...acumulator,
      [internalAcumulator]: acumulator[internalAcumulator]
        ? [...acumulator[internalAcumulator], item]
        : [item]
    };
    return null;
  });

  return acumulator;
};
