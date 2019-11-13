import { ROW_CALSS_PREFIX } from './constans';

const weightDeal = (text) => {
  const result = <span className={`${ROW_CALSS_PREFIX}-weight`}>{text}</span>;
  return result;
};
const weight = (columns = []) => {
  let newColums = [].concat(columns);
  newColums = newColums.map((column) => {
    const newColumn = { ...column };

    if (newColumn.weight) {
      if (newColumn.render && Util.isFunction(newColumn.render)) {
        const render = (text, row, index) => weightDeal(newColumn.render(text, row, index));
        newColumn.render = render;
      } else {
        newColumn.render = (text, row, index) => weightDeal(text, row, index);
      }
    }
    return newColumn;
  });
  return newColums;
};
export default weight;
