export const changeActived = (key: string, active: boolean, rootObj: any) => {
  let arr = rootObj.concat();
  arr.forEach((_: any) => (_.active = false));

  for (let i in arr) {
    if (arr[i].key === key) {
      arr[i].active = active;
      break;
    }
  }

  return arr;
};
