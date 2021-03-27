import React, { useCallback, useEffect, useState } from 'react';
import 'dayjs/locale/ru';
import cn from 'classnames';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);
import MDEditor from '@uiw/react-md-editor';
import { Button, TextField } from '@material-ui/core';

import styles from './Report.module.css';
import { IReport } from 'shared/models/Report';
import dayjs from 'dayjs';
import UserShortInfo from '../../UserShortInfo/UserShortInfo';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentUser,
  selectCurrentUserOrThrowError,
} from 'features/users/store/selectors';
import { IApplicationState } from 'setup/store';
import { IUser } from 'shared/models/User';
import { createReport, updateReport } from 'features/reports/store/actions';
import { convertHsAndMsToSeconds } from 'shared/helpers/convertHoursAndMinutesToSeconds';
import { selectUpdatingReport } from 'features/reports/store/selectors';

interface ItemProps {
  item: IReport;
  isCreate?: boolean;
  setOpenedCreateEditing?: (a: boolean) => void;
  activeDayValue?: number;
}

const Report: React.FC<ItemProps> = ({
  item,
  isCreate = false,
  setOpenedCreateEditing,
  activeDayValue,
}) => {
  const currentUser = useSelector((state: IApplicationState) =>
    selectCurrentUserOrThrowError(state)
  );
  const dispatch = useDispatch();
  const [isOpenEditing, setOpenedEditing] = useState<boolean>(isCreate);
  const [mdValue, mdSetValue] = useState<string | undefined>('');
  const totalTime = dayjs.duration(item.totalTime * 1000).format('HH:mm');

  const [timeDuration, setTimeDuration] = useState<string>(totalTime);

  const updatingReport = useSelector(selectUpdatingReport(item.id));

  const onChangeButtonClick = useCallback(() => {
    mdSetValue(item.text);
    if (isCreate && setOpenedCreateEditing) {
      setOpenedCreateEditing(false);
    } else {
      setOpenedEditing((prevState) => !prevState);
    }
  }, [item.text, isCreate, setOpenedCreateEditing]);

  const onChangeTimeDuration = useCallback((e) => {
    setTimeDuration(e.currentTarget.value);
  }, []);

  const onSaveButtonClick = useCallback(() => {
    const totalTime = convertHsAndMsToSeconds(timeDuration);
    const createdAt = dayjs()
      .date(activeDayValue || 0)
      .format('YYYY-MM-DD');
    if (isCreate && setOpenedCreateEditing && currentUser) {
      dispatch(
        createReport({
          user: currentUser,
          text: mdValue || '',
          totalTime,
          createdAt,
        })
      );
      setOpenedCreateEditing(false);
    } else {
      dispatch(
        updateReport({
          id: item.id,
          text: mdValue || '',
          totalTime,
          createdAt,
          user: currentUser,
        })
      );
      setOpenedEditing(false);
    }
  }, [
    mdValue,
    timeDuration,
    item.id,
    dispatch,
    activeDayValue,
    isCreate,
    currentUser,
    setOpenedCreateEditing,
  ]);

  return (
    <div className={styles.root}>
      <div className={styles.userInfo}>
        <UserShortInfo user={item.user} reportCreatedAt={item.updatedAt} />
      </div>
      <div className={styles.body}>
        <div className={styles.tasks}>
          <div className={styles.tasksTitle}>Задачи</div>
          {isOpenEditing ? (
            <MDEditor value={mdValue} onChange={mdSetValue} />
          ) : (
            <MDEditor.Markdown source={item.text} />
          )}
        </div>
        <div className={styles.bottom}>
          <div className={styles.totalTime}>
            <div className={styles.totalTimeTitle}>Общее время</div>
            <div className={styles.totalTimeBody}>
              {!isOpenEditing ? (
                totalTime
              ) : (
                <TextField
                  id="time"
                  // label="Время работы"
                  type="time"
                  onChange={onChangeTimeDuration}
                  defaultValue={timeDuration}
                  className={styles.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300,
                  }}
                />
              )}
            </div>
          </div>
          {currentUser?.id === (item.user?.id ?? 0) && (
            <div className={styles.buttonContainer}>
              {!isOpenEditing ? (
                <Button onClick={onChangeButtonClick} color="primary">
                  Изменить
                </Button>
              ) : (
                <>
                  <div className={styles.cancelButtonContainer}>
                    <Button onClick={onChangeButtonClick} color="secondary">
                      Отменить
                    </Button>
                  </div>
                  <Button onClick={onSaveButtonClick} color="secondary">
                    Сохранить
                  </Button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Report;
