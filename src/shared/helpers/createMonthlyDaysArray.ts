import dayjs from 'dayjs';

export interface IDayTimeLineItem {
  name: string;
  value: number;
  isWeekend: boolean;
  isLastOfWeekend: boolean;
}

export const createMonthlyDaysArray = (
  daysAmount: number
): IDayTimeLineItem[] => {
  const outputArray = [];
  for (let i = 1; i <= daysAmount; i += 1) {
    const name = dayjs().date(i).format('dd');
    const item: IDayTimeLineItem = {
      name,
      value: i,
      isWeekend: name === 'сб' || name === 'вс',
      isLastOfWeekend: name === 'вс',
    };
    outputArray.push(item);
  }
  return outputArray;
};
