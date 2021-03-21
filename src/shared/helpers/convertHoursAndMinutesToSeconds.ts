export const convertHsAndMsToSeconds = (time: string) => {
  const splittedTime = time.split(':');
  const totalSecondsInHours = +splittedTime[0] * 60 * 60;
  const totalSecondsInMinutes = +splittedTime[1] * 60;
  return totalSecondsInHours + totalSecondsInMinutes;
};
