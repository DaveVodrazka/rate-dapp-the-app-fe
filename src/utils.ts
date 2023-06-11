export const addressElision = (address: string, n: number = 5): string => {
  if (address.length < 2 * n) {
    // too short for elision
    return address;
  }
  const start = address.substring(0, n);
  const end = address.substring(address.length - n);

  return `${start}...${end}`;
};
