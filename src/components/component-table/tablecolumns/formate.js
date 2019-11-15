const format = (columns = []) => {
  let newColums = [].concat(columns);
  newColums = newColums.map((column) => {
    const newColumn = { ...column };
    if (newColumn.format && Util.isFunction(newColumn.format)) {
      if (newColumn.render && Util.isFunction(newColumn.render)) {
        const $render = newColumn.render;
        newColumn.render = (text, row, index) => {
          const result = newColumn.format($render(text, row, index));
          return result;
        };
      } else {
        newColumn.render = text => newColumn.format(text);
      }
    }
    return newColumn;
  });
  return newColums;
};
export default format;
