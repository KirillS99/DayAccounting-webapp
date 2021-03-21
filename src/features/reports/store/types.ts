import { ICommunication } from 'shared/models/Communication/Communication';
import { ICommunicationById } from 'shared/models/Communication/CommunicationById';
import { IReport } from 'shared/models/Report';
export interface IReportsState {
  communications: {
    loadingReportsByDay: ICommunication;
    updatingReport: ICommunicationById;
  };
  data: {
    reportsList: IReport[];
  };
}
