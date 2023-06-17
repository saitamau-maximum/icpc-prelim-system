const getData = () => {
  return localStorage.getItem("data");
};

const setData = (data: string) => {
  localStorage.setItem("data", data);
};
