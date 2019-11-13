import weight from './weight';

const columnMoerAttr = {
  weight,
};
const tableColumns = {
  dealColumns: (columns = []) => {
    let newColumns = [].concat(columns);
    if (!Util.isArray(newColumns)) {
      newColumns = [];
      console.warn('columns必须是一个数组');
    } else if (newColumns.length) {
      newColumns.forEach((item) => {
        Object.keys(columnMoerAttr).forEach((key) => {
          if (item[key]) {
            newColumns = columnMoerAttr[key](columns);
          }
        });
      });
    }
    return newColumns;
  },
};
export default {
  ...columnMoerAttr,
  ...tableColumns,
};
