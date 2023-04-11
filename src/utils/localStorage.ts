export const getItemFromLocalStorage = (id: string) => {
  try {
    const item = localStorage.getItem(id);
    return item;
  } catch {
    return null;
  }
};

export const setItemToLocalStorage = (id: string, value: string) => {
  try {
    localStorage.setItem(id, value);
  } catch {
    return null;
}
};

export const removeItemFromLocalStorage = (id: string) => {
  try {
    localStorage.removeItem(id.toString());
  } catch {
    return null;
  }
}
