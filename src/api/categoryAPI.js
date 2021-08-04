import instance from "./instance";

export const getAllCate = () => {
  const url = `/categories`;
  return instance.get(url);
};
export const getCate = (id) => {
  const url = `/categories/${id}`;
  return instance.get(url);
};
export const removeCate = (id) => {
  const url = `/categories/${id}`;
  return instance.delete(url);
};
export const addCate = (item) => {
  const url = `/categories`;
  return instance.post(url, item);
};
export const updateCate = (item) => {
  const url = `/categories/${item.id}`;
  return instance.put(url, item);
};