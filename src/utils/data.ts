export interface Problem {
  no: number;
  code: string;
  firstCleared: boolean;
  differentProgram: boolean;
  completed: boolean;
}

interface Data {
  j: Problem;
  k: Problem;
  l: Problem;
  m: Problem;
}

const initialProblemData: Problem = {
  firstCleared: false,
  no: 1,
  code: "",
  differentProgram: false,
  completed: false,
};

const initialData: Data = {
  j: JSON.parse(JSON.stringify(initialProblemData)),
  k: JSON.parse(JSON.stringify(initialProblemData)),
  l: JSON.parse(JSON.stringify(initialProblemData)),
  m: JSON.parse(JSON.stringify(initialProblemData)),
};

export const getData = () => {
  const data = localStorage.getItem("data");
  if (data) return JSON.parse(data) as Data;
  setData(initialData);
  return initialData;
};

export const setData = (data: Data) => {
  localStorage.setItem("data", JSON.stringify(data));
};
