const getExceprt = (sentence, num) => {
  const exceprt = sentence.split` `.slice(0, num).join` `;
  const isFinished = exceprt.endsWith(".");
  return exceprt + `${isFinished ? "" : "..."}`;
};
export default getExceprt;
