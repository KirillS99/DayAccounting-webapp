import React, { useCallback, useState } from 'react';
import 'dayjs/locale/ru';
import cn from 'classnames';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);
import MDEditor from '@uiw/react-md-editor';
import { Button, TextField } from '@material-ui/core';

import styles from './Item.module.css';
import { IReport } from 'shared/models/Report';
import dayjs from 'dayjs';
import UserShortInfo from '../../UserShortInfo/UserShortInfo';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from 'features/users/store/selectors';
import { IApplicationState } from 'setup/store';
import { IUser } from 'shared/models/User';
import { updateReport } from 'features/reports/store/actions';
import { convertHsAndMsToSeconds } from 'shared/helpers/convertHoursAndMinutesToSeconds';
import { selectUpdatingReport } from 'features/reports/store/selectors';

interface ItemProps {
  item: IReport;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const currentUser = useSelector((state: IApplicationState) =>
    selectCurrentUser(state)
  );
  const dispatch = useDispatch();
  const [isOpenEditing, setOpenedEditing] = useState<boolean>(false);
  const [mdValue, mdSetValue] = useState<string | undefined>('');
  const [timeDuration, setTimeDuration] = useState<string>('');

  const updatingReport = useSelector(selectUpdatingReport(item.id));

  const totalTime = dayjs.duration(item.totalTime * 1000).format('HH:mm');

  const onChangeButtonClick = useCallback(() => {
    mdSetValue(item.text);
    setTimeDuration(totalTime);
    setOpenedEditing((prevState) => !prevState);
  }, [item.text, totalTime]);

  const onChangeTimeDuration = useCallback((e) => {
    setTimeDuration(e.currentTarget.value);
  }, []);

  const onSaveButtonClick = useCallback(() => {
    const totalTime = convertHsAndMsToSeconds(timeDuration);
    dispatch(updateReport({ id: item.id, text: mdValue || '', totalTime }));
    setOpenedEditing(false);
  }, [mdValue, timeDuration, item.id, dispatch]);

  return (
    <div className={styles.root}>
      <div className={styles.userInfo}>
        <UserShortInfo user={item.user} reportCreatedAt={item.createdAt} />
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
          {currentUser?.id === item.user.id && (
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

export default Item;
