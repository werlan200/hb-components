const getAllItemsPerChildren = (item, array) => {
  if (item.children) {
    return item.children.map((i) => getAllItemsPerChildren(i, array));
  } else {
    array.push(item);
  }
};
export const flattenData = (data) => {
  const array = [];
  data.forEach((i) => getAllItemsPerChildren(i, array));
  return array;
};
