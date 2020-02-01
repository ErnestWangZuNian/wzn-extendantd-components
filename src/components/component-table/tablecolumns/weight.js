import classNames from 'classnames';
import { COMPONENT_TABLE_ROW_WEIGHT } from './constans';

const weight = (columns = []) => {
  let newColums = [].concat(columns);
  newColums = newColums.map((column) => {
    const newColumn = { ...column };
    if (newColumn.weight) {
      const { className } = newColumn;
      newColumn.className = classNames(`${COMPONENT_TABLE_ROW_WEIGHT}`, className);
    }
    return newColumn;
  });
  return newColums;
};
export default weight;
