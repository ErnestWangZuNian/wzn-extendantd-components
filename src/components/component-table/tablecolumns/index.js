import weight from './weight';
import format from './formate';

const columnMoerAttr = {
  weight,
  format,
};
const tableColumns = {
  dealColumns: (columns = []) => {
    let newColumns = [].concat(columns);
    if (!Util.isArray(newColumns)) {
      newColumns = [];
      console.warn('columns必须是一个数组');
    } else if (newColumns.length) {
      Object.keys(columnMoerAttr).forEach((key) => {
        newColumns = columnMoerAttr[key](newColumns);
      });
    }
    return newColumns;
  },
};
export default {
  ...columnMoerAttr,
  ...tableColumns,
};
