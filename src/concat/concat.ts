const concat = <PassedArrayType>(array: PassedArrayType | PassedArrayType[], ...args: (PassedArrayType | PassedArrayType[])[]): PassedArrayType[] => {
  const result: PassedArrayType[] = Array.isArray(array) ? [...array] : [array];

  args.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(e => result.push(e));
      return;
    }

    result.push(item);
  });

  return result;
};

export default concat;
