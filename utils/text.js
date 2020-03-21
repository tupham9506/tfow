export const convertToStandard = (string) => {
  string = string.toLowerCase()
    .replace(/ /g, '');
  return string;
};
