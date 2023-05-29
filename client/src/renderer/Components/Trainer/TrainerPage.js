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

const TrainerPage = () => {
  // Trainers data array

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [attendance, setAttendance] = useState([]);
  const [id, setId] = useState(null);

  const fetchTrainersData = async () => {
    try {
      const trainersResponse = await axios.get(
        'http://localhost:7000/trainers/'
      );
      const trainers = trainersResponse.data;

      const trainersDataPromises = trainers.map(async (trainer) => {
        const attendanceResponse = await axios.get(
          `http://localhost:7000/trainers/attendence/${trainer._id}`
        );
        return { ...trainer, attendance: attendanceResponse.data };
      });

      const trainersData = await Promise.all(trainersDataPromises);
      setData(trainersData);
      console.log('data', data);
    } catch (error) {
      console.error('Error fetching trainers data:', error);
    }
  };

  fetchTrainersData();

  // const trainerss =

  const classes = {
    container: {
      width: '90%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px',
      marginTop: '60px',
    },
    card: {
      flex: '1',
      width: '100px',
      height: '100%',
      borderRadius: '8px',
      background: '#f0f0f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
      color: 'white',
    },
    trainersListContainer: {
      width: '100%',
      height: '350px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      overflowY: 'auto',
      padding: '16px',
    },
    trainersRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #ccc',
      padding: '8px',
      fontSize: '14px',
    },
    trainersButtons: {
      display: 'flex',
      gap: '8px',
    },
    viewButton: {
      padding: '4px 8px',
      background: '#00aaff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    editButton: {
      padding: '4px 8px',
      background: '#ffaa00',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    removeButton: {
      padding: '4px 8px',
      background: '#ff0000',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
      borderRadius: '20px',
      background: 'white',
      padding: '8px',
      border: '1px solid #ccc',
      width: '30%',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    searchInput: {
      marginRight: '8px',
      outline: 'none',
      border: 'none',
      flexGrow: 1,
      height: '20px',
    },
  };

  const scrollbarStyle = `
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

  // Apply the custom scrollbar style
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
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  // OPTIONSS
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const deleteTranier = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:7000/trainers/${id}`
      );
      console.log(`user deleted`, response.data);
    } catch (e) {
      console.log(e);
    }
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
  
    const filteredTrainers = data.filter((trainer) =>
      trainer.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filteredTrainers);
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
            value={searchInput}
            onChange={handleSearchInputChange}
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
            <SalaryModal
              open={salaryModalOpen}
              onClose={handleSalaryModalClose}
            />
          </div>
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
          <h4 style={{ flex: 1, textAlign: 'right', marginRight: '80px' }}>
            SELECT AN ACTION
          </h4>
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
                  key={trainers._id}
                  trainer={trainers}
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
                <button
                  onClick={() => deleteTranier(trainers._id)}
                  style={classes.removeButton}
                >
                  Remove
                </button>
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
                    data={trainers.attendance}
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
