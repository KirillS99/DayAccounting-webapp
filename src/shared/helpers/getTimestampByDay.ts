import dayjs from 'dayjs';
import { ITimestampDuration } from 'shared/models/Report';

export const getTimestampByDay = (day: string): ITimestampDuration => {
  const timestampStart = dayjs(day).startOf('day').unix();
  const timestampEnd = dayjs(day).endOf('day').unix();
  return {
    timestampEnd,
    timestampStart,
  };
};
