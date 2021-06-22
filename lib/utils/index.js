export const saveToLocalStorage = (name, value) =>
  window.localStorage.setItem(name, JSON.stringify(value));
export const retrieveFromLocalStorage = name => JSON.parse(localStorage.getItem(name)) ?? {};
