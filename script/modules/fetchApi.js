import {controlLoader} from "./control.js";

export const loadGoods = async (fetchParams) => {
  const result = await fetch(fetchParams);
  if (result.ok) {
    setTimeout(() => {
      controlLoader(false);
    }, 2500);
  }
  const data = await result.json();

  return data;
};
