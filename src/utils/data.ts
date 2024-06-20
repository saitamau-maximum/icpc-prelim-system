export interface Problem {
  no: number;
  dlTime: number | null;
  completed: boolean;
}

export type ProblemKey = "j" | "k" | "l" | "m";

interface Data {
  j: Problem;
  k: Problem;
  l: Problem;
  m: Problem;
}

const initialProblemData: Problem = {
  no: 1,
  dlTime: null,
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

export const resetData = () => {
  setData(initialData);
};
