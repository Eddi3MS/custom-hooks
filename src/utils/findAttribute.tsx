export function findAttribute(
  arr: any,
  identifier: any,
  value: any,
  returnValue: any
) {
  let [itemFound] = arr.filter((item: any) => item[identifier] === value);

  return itemFound[returnValue] ?? undefined;
}
