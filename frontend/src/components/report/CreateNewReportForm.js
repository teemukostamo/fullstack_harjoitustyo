import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createReport } from '../../actions/reportActions';
import { setNotification } from '../../reducers/notificationReducer';
import Togglable from '../layout/Togglable';
import {
  Form,
  Button,
  Input,
  Dropdown,
  Container,
  Grid,
  Popup,
  Icon
} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import fi from 'date-fns/locale/fi';
import moment from 'moment';

const CreateNewReportForm = props => {
  const [programId, setProgramId] = useState('');
  const [programNumber, setProgramNumber] = useState(null);
  const [dj, setDj] = useState(
    `${props.login.first_name} ${props.login.last_name}`
  );
  const [newProgramName, setNewProgramName] = useState('');
  const [programDate, setProgramDate] = useState(new Date());
  const [programStartTime, setProgramStartTime] = useState('');
  const [programEndTime, setProgramEndTime] = useState('');
  const [redirect, setRedirect] = useState(false);

  // if (props.programs.allPrograms === null) {
  //   return <div>loafing</div>;
  // }

  console.log('create new report form props', props);

  // list of programoptions for select
  let programOptions = props.programs.activePrograms.map(program => ({
    key: program.id,
    text: program.name,
    value: program.id
  }));
  const getProgram = (event, { value }) => {
    event.preventDefault();
    setProgramId(value);
    console.log(programId);
  };

  // list of program start time options
  const startTimeOptions = [
    {
      key: 0,
      text: '00:00',
      value: '00:00:00'
    },
    {
      key: 1,
      text: '01:00',
      value: '01:00:00'
    },
    {
      key: 2,
      text: '02:00',
      value: '02:00:00'
    },
    {
      key: 3,
      text: '03:00',
      value: '03:00:00'
    },
    {
      key: 4,
      text: '04:00',
      value: '04:00:00'
    },
    {
      key: 5,
      text: '05:00',
      value: '05:00:00'
    },
    {
      key: 6,
      text: '06:00',
      value: '06:00:00'
    },
    {
      key: 7,
      text: '07:00',
      value: '07:00:00'
    },
    {
      key: 8,
      text: '08:00',
      value: '08:00:00'
    },
    {
      key: 9,
      text: '09:00',
      value: '09:00:00'
    },
    {
      key: 10,
      text: '10:00',
      value: '10:00:00'
    },
    {
      key: 11,
      text: '11:00',
      value: '11:00:00'
    },
    {
      key: 12,
      text: '12:00',
      value: '12:00:00'
    },
    {
      key: 13,
      text: '13:00',
      value: '13:00:00'
    },
    {
      key: 14,
      text: '14:00',
      value: '14:00:00'
    },
    {
      key: 15,
      text: '15:00',
      value: '15:00:00'
    },
    {
      key: 16,
      text: '16:00',
      value: '16:00:00'
    },
    {
      key: 17,
      text: '17:00',
      value: '17:00:00'
    },
    {
      key: 18,
      text: '18:00',
      value: '18:00:00'
    },
    {
      key: 19,
      text: '19:00',
      value: '19:00:00'
    },
    {
      key: 20,
      text: '20:00',
      value: '20:00:00'
    },
    {
      key: 21,
      text: '21:00',
      value: '21:00:00'
    },
    {
      key: 22,
      text: '22:00',
      value: '22:00:00'
    },
    {
      key: 23,
      text: '23:00',
      value: '23:00:00'
    }
  ];
  const getStartTime = (event, { value }) => {
    event.preventDefault();
    setProgramStartTime(value);
    console.log(programStartTime);
  };

  // list of program end time options
  const endTimeOptions = [
    {
      key: 0,
      text: '01:00',
      value: '01:00:00'
    },
    {
      key: 1,
      text: '02:00',
      value: '02:00:00'
    },
    {
      key: 2,
      text: '03:00',
      value: '03:00:00'
    },
    {
      key: 3,
      text: '04:00',
      value: '04:00:00'
    },
    {
      key: 4,
      text: '05:00',
      value: '05:00:00'
    },
    {
      key: 5,
      text: '06:00',
      value: '06:00:00'
    },
    {
      key: 6,
      text: '07:00',
      value: '07:00:00'
    },
    {
      key: 7,
      text: '08:00',
      value: '08:00:00'
    },
    {
      key: 8,
      text: '09:00',
      value: '09:00:00'
    },
    {
      key: 9,
      text: '10:00',
      value: '10:00:00'
    },
    {
      key: 10,
      text: '11:00',
      value: '11:00:00'
    },
    {
      key: 11,
      text: '12:00',
      value: '12:00:00'
    },
    {
      key: 12,
      text: '13:00',
      value: '13:00:00'
    },
    {
      key: 13,
      text: '14:00',
      value: '14:00:00'
    },
    {
      key: 14,
      text: '15:00',
      value: '15:00:00'
    },
    {
      key: 15,
      text: '16:00',
      value: '16:00:00'
    },
    {
      key: 16,
      text: '17:00',
      value: '17:00:00'
    },
    {
      key: 17,
      text: '18:00',
      value: '18:00:00'
    },
    {
      key: 18,
      text: '19:00',
      value: '19:00:00'
    },
    {
      key: 19,
      text: '20:00',
      value: '20:00:00'
    },
    {
      key: 20,
      text: '21:00',
      value: '21:00:00'
    },
    {
      key: 21,
      text: '22:00',
      value: '22:00:00'
    },
    {
      key: 22,
      text: '23:00',
      value: '23:00:00'
    },
    {
      key: 23,
      text: '23:59',
      value: '23:59:59'
    }
  ];
  const getEndTime = (event, { value }) => {
    event.preventDefault();
    setProgramEndTime(value);
    console.log(programEndTime);
  };

  const createReport = () => {
    const newReport = {
      user_id: props.login.id,
      program_id: programId,
      new_program_name: newProgramName,
      program_date: moment(programDate).format('YYYY-MM-DD'),
      program_start_time: programStartTime,
      program_end_time: programEndTime,
      program_no: programNumber,
      program_dj: dj,
      status: 0,
      rerun: null
    };
    console.log(parseInt(programEndTime));
    if (
      parseInt(newReport.program_end_time) <=
      parseInt(newReport.program_start_time)
    ) {
      props.setNotification('Tarkista ohjelman alku- ja loppuaika!', 'fail');
    } else {
      props.createReport(newReport);
      console.log(
        'create report button click pros',
        props.report.reportDetails
      );
      console.log('creating report:', newReport);
      setRedirect(true);
    }
  };

  const style = {
    borderRadius: 0,
    display: 'block',
    opacity: 0.9,
    padding: '2em'
  };

  if (redirect && props.report.newReport !== null) {
    console.log('create new report for after submit props', props);
    console.log('redirecting to id', props.report.newReport.id);
    return <Redirect to={`reports/${props.report.newReport.id}`} />;
  }

  let disabled;
  if (!programDate || !programStartTime || !programEndTime || !dj) {
    disabled = true;
  } else if (!programId && newProgramName === '') {
    disabled = true;
  } else {
    disabled = false;
  }

  return (
    <React.Fragment>
      <Grid.Column>
        <Container>
          <h3>Luo uusi raportti</h3>
          <Form>
            <Form.Field>
              <label>
                Ohjelma{' '}
                <Popup
                  trigger={
                    <Icon
                      style={{ display: 'inline' }}
                      name="question circle"
                    />
                  }
                  content="Valitse ohjelma listalta. Jos ohjelmaasi ei löydy listalta niin klikkaa Luo uusi ohjelma, kirjoita ohjelmasi nimi ja jatka"
                  style={style}
                  inverted
                />
              </label>
              <Dropdown
                placeholder="Valitse ohjelma"
                openOnFocus
                selection
                search
                options={programOptions}
                onChange={getProgram}
              />{' '}
              <Togglable
                style={{ marginTop: '0.5rem', float: 'right' }}
                size="tiny"
                buttonLabel="Luo uusi ohjelma"
              >
                <Form.Field>
                  <label>Uusi ohjelma</label>
                  <Input
                    type="text"
                    value={newProgramName}
                    onChange={e => setNewProgramName(e.target.value)}
                  />{' '}
                </Form.Field>
              </Togglable>
            </Form.Field>
            <Form.Field>
              <label>
                Ohjelmanumero{' '}
                <Popup
                  trigger={
                    <Icon
                      style={{ display: 'inline' }}
                      name="question circle"
                    />
                  }
                  content="Tsekkaa ohjelmasi numero viikon ohjelmakartasta."
                  style={style}
                  inverted
                />
              </label>
              <Input
                type="number"
                value={programNumber}
                onChange={e => setProgramNumber(e.target.value)}
              />{' '}
            </Form.Field>
            <Form.Field>
              <label>DJ</label>
              <Input
                type="text"
                value={dj}
                onChange={e => setDj(e.target.value)}
              />{' '}
            </Form.Field>

            <Form.Group widths="equal">
              <Form.Field>
                <label>Ohjelman päivä</label>
                <DatePicker
                  locale={fi}
                  selected={programDate}
                  dateFormat="dd.MM.yyyy"
                  onChange={date => setProgramDate(date)}
                />
              </Form.Field>
              <Form.Field>
                <label>Alkaa kello</label>
                <Dropdown
                  placeholder="hh:mm"
                  openOnFocus
                  selection
                  search
                  options={startTimeOptions}
                  onChange={getStartTime}
                />{' '}
              </Form.Field>
              <Form.Field>
                <label>Päättyy kello</label>
                <Dropdown
                  placeholder="hh:mm"
                  openOnFocus
                  selection
                  search
                  options={endTimeOptions}
                  onChange={getEndTime}
                />{' '}
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Button disabled={disabled} color="green" onClick={createReport}>
                Jatka
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </Grid.Column>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  console.log('report details state to props', state);
  return {
    report: state.report,
    reportsList: state.reportsList,
    programs: state.programs,
    notification: state.notification,
    users: state.users,
    login: state.login
  };
};

const connectedCreateNewReportForm = connect(mapStateToProps, {
  createReport,
  setNotification
})(CreateNewReportForm);

export default connectedCreateNewReportForm;
