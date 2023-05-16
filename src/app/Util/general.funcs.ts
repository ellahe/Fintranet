export const convertKeysToArray = (form: any) => {
  const selected = [];
  for (const [key, value] of Object.entries(form)) {
    if (value) {
      selected.push(key);
    }
  }
  return selected;
};
