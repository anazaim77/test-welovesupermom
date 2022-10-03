export const toAlternateUpperAndLower = (text: string) => {
  const characters = text.split("");
  let newString = characters.reduce((accumulator, item, index) => {
    if (index % 2) {
      return accumulator + item.toUpperCase();
    }
    return accumulator + item.toLowerCase();
  }, "");
  return newString;
};

export const convertStringToCSVString = (text: string) => {
  const characters = text.split("");
  let newString = characters.reduce((accumulator, item, index) => {
    if (index === 0) {
      return accumulator + `${item}`;
    }
    return accumulator + `,${item}`;
  }, "");
  return newString;
};
