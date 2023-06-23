import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import {
  Button,
  FormControl,
  InputLabel,
  InputAdornment,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import CalendarModal from 'renderer/Common/Calendar/Calendar';
import Modal from './TrainerModals/TrainerModal';
import axios from 'axios';
import EventIcon from '@mui/icons-material/Event';
import { IconButton } from '@mui/material';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import TrainerEditModal from './TrainerModals/TrainerEditModal';
import TrainerViewModal from './TrainerModals/TrainerViewModal';
import SalaryModal from './TrainerModals/SalaryModal';
import { classes } from './Style'
import { scrollbarStyle } from 'renderer/Common/scrollbarStyle';

const TrainerPage = () => {

  const [data, setData] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [id, setId] = useState(null)
  const fetchTrainersData = async () => {
    try {
      const trainersResponse = await axios.get('http://localhost:7000/trainers/');
      const trainers = trainersResponse.data;

      const trainersDataPromises = trainers.map(async (trainer) => {
        const attendanceResponse = await axios.get(`http://localhost:7000/trainers/attendence/${trainer._id}`);
        console.log(attendanceResponse.data,"attendance response")
        if (attendanceResponse.data) {
           return { ...trainer, attendance: attendanceResponse.data } 
          } else {
          console.log('returning')
          return { ...trainer } }
      });

      const trainersData = await Promise.all(trainersDataPromises);
      
      setData(trainersData);
      console.log('data', data)
    } catch (error) {
      console.error('Error fetching trainers data:', error);
    }
  };

  fetchTrainersData();
  
  const CustomScrollbarStyle = () => (
    <style dangerouslySetInnerHTML={{ __html: scrollbarStyle }} />
  );

  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [openTrainerModal, setOpenTrainerModal] = useState(false);
  const [openCalendarModal, setOpenCalendarModal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [salaryModalOpen, setSalaryModalOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  // OPTIONSS
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const deleteTranier = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:7000/trainers/${id}`)
      console.log(`user deleted`, response.data)
    } catch (e) {
      console.log(e)
    }
  }
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // TRAINER MODAL

  const handleOpenTrainerModal = () => {
    setOpenTrainerModal(true);
  };

  const handleCloseTrainerModal = () => {
    setOpenTrainerModal(false);
  };

  // CALENDAR MODAL

  const handleOpenCalendarModal = () => {
    setOpenCalendarModal(true);
  };

  const handleCloseCalendarModal = () => {
    setOpenCalendarModal(false);
  };

  // EDIT BUTTON MODAL

  const handleEditButtonClick = () => {
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  // VIEW BUTTON MODAL

  const handleViewModalOpen = () => {
    setSelectedTrainer();
    setViewModalOpen(true);

  };

  const handleViewModalClose = () => {
    setViewModalOpen(false);
    setSelectedTrainer(null);
  };


  const handleSalaryModalOpen = () => {
    setSalaryModalOpen(true);
  };

  const handleSalaryModalClose = () => {
    setSalaryModalOpen(false);
  };

  // Render the trainers' data and an "View" button for each trainer
  const renderTrainers = (trainers) => {

    return trainers.map((trainer) => (

      <div key={trainer.id}>
        <span>{trainer.name}</span>
        <span>{trainer.email}</span>
        <span>{trainer.contact}</span>
        <button onClick={() => handleViewModalOpen()}>View</button>
      </div>
    ));
  };

  return (
    <div style={classes.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={classes.searchContainer}>
          <input
            style={classes.searchInput}
            variant="outlined"
            size="small"
            placeholder="Search"
          />
          <SearchIcon />
        </div>
        <div style={{ display: 'flex' }}>
          <div>
            {/* Button to open the modal */}
            <Button
              onClick={handleOpenTrainerModal}
              style={{
                marginTop: '4px',
                backgroundColor: 'orange',
                color: 'white',
                borderRadius: '10px',
                marginRight: '30px',
                height: '50px',
              }}
            >
              Add Trainer
            </Button>

            {/* Modal component */}
            <Modal open={openTrainerModal} onClose={handleCloseTrainerModal} />
          </div>

          <div>
            {/* Button to open the modal */}
            <Button
              onClick={handleSalaryModalOpen}
              style={{
                marginTop: '4px',
                backgroundColor: '#8ec904',
                color: 'white',
                borderRadius: '10px',
                marginRight: '30px',
                height: '50px',
              }}
            >
              Salary Status
            </Button>

            {/* Modal component */}
            <SalaryModal open={salaryModalOpen} onClose={handleSalaryModalClose} />
          </div>

          {/* Dropdown filter */}
          <FormControl
            variant="outlined"
            style={{
              marginBottom: '16px',
              minWidth: '200px',
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              width: '80px',
            }}
          >
            <InputLabel style={{ marginLeft: '8px' }}>
              Filter Trainers
            </InputLabel>
            <Select
              value={selectedOption}
              onChange={handleOptionChange}
              label="Select Option"
              style={{
                paddingLeft: '8px',
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                borderRadius: '20px',
              }}
            >
              <MenuItem value="option1" selected>
                All
              </MenuItem>
              <MenuItem value="option2">Active Trainers</MenuItem>
              <MenuItem value="option3">Inactive Trainers</MenuItem>
              <MenuItem value="option4">Men</MenuItem>
              <MenuItem value="option5">Women</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <h2>Trainers List</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '1020px',
            justifyContent: 'space-between',
          }}
        >
          <h4 style={{ flex: 1, marginLeft: '30px' }}>NAME</h4>
          <h4 style={{ flex: 1 }}>DATE</h4>
          <h4 style={{ flex: 1 }}>TIME</h4>
          <h4 style={{ flex: 1, marginRight: '-80px' }}>SELECT AN ACTION</h4>
        </div>

        <div style={classes.trainersListContainer}>
          <CustomScrollbarStyle />
          {/* Trainers list */}
          {data.map((trainers, index) => (
            <div key={trainers._id} style={classes.trainersRow}>

              <div>{trainers.name}</div>

              <div style={classes.trainersButtons}>
                {/* <button
                  style={classes.viewButton}
                  onClick={()=>{handleViewModalOpen()}}//renderTrainers(trainers)
                >
                  View
                </button> */}
                <TrainerViewModal
                  open={viewModalOpen}
                  onClose={handleViewModalClose}
                  key={trainers._id} trainer={trainers}
                />
                {/* <button
                  style={classes.editButton}
                  onClick={handleEditButtonClick}
                >{console.log('qaaaaaaaaaaaaaaaaaaaaaaaaa',trainers)}
                  Edit
                </button> */}
                <TrainerEditModal
                  open={editModalOpen}
                  onClose={handleEditModalClose}
                  trainer={trainers}
                />
                <button onClick={() => deleteTranier(trainers._id)} style={classes.removeButton}>Remove</button>
                <div>
                  <IconButton
                    onClick={handleOpenCalendarModal}
                    // value={trainers.attendance}
                    style={{
                      backgroundColor: 'green',
                      color: 'white',
                      borderRadius: '5px',
                    }}
                  >
                    <CalendarMonthRoundedIcon />
                  </IconButton>

                  <CalendarModal
                    open={openCalendarModal}
                    onClose={handleCloseCalendarModal}
                    
                    data={trainers.attendance ? trainers.attendance : null}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerPage;
