import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import Modal from './UserModal/Modal';
import { scrollbarStyle } from 'renderer/Common/scrollbarStyle';
import UserViewModal from './UserModal/UserViewModal';
import UserEditModal from './UserModal/UserEditModal';
import FeesModal from './UserModal/FeesModal';
import { classes } from './UserStyling';
import axios from 'axios';

const UserPage = () => {
  const [members, setMembers] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [feesModalOpen, setFeesModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [filteredMembers, setFilteredMembers] = useState([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async (filter = '') => {
    try {
      let url = 'http://localhost:7000/member/all';

      if (filter === 'active') {
        url += '?filter=active';
      } else if (filter === 'inactive') {
        url += '?filter=inactive';
      } 

      const response = await axios.get(url);
      setMembers(response.data.members);
      setFilteredMembers(response.data.members);
    } catch (error) {
      console.error('Error retrieving members:', error.message);
    }
  };

  const deleteMember = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:7000/member/delete/${id}`
      );
      console.log(`user deleted`, response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  
    if (selectedValue === '') {
      setFilteredMembers(members);
    } else if (selectedValue === 'option1') {
      const activeMembers = members.filter(
        (member) => member.isActive
      );
      setFilteredMembers(activeMembers);
    } else if (selectedValue === 'option2') {
      const inactiveMembers = members.filter(
        (member) => !member.isActive
      );
      setFilteredMembers(inactiveMembers);
    }
  };
  

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleEditButtonClick = () => {
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  const handleFeesModalClose = () => {
    setFeesModalOpen(false);
  };

  const handleFeesModalOpen = () => {
    setFeesModalOpen(true);
  };

  const handleViewModalOpen = (member) => {
    setSelectedMember(member);
    setViewModalOpen(true);
  };

  const handleViewModalClose = () => {
    setViewModalOpen(false);
    setSelectedMember(null);
  };

  const handleDeleteMember = (member) => {
    // Perform the deletion logic here, such as making an API call
    // and then update the state accordingly
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
            <Button
              onClick={handleOpenModal}
              style={{
                marginTop: '4px',
                backgroundColor: 'orange',
                color: 'white',
                borderRadius: '10px',
                marginRight: '30px',
                height: '50px',
              }}
            >
              Add Member
            </Button>

            <Modal open={openModal} onClose={handleCloseModal} />
          </div>

          <div>
            <Button
              onClick={handleFeesModalOpen}
              style={{
                marginTop: '4px',
                backgroundColor: '#8ec904',
                color: 'white',
                borderRadius: '10px',
                marginRight: '30px',
                height: '50px',
              }}
            >
              FEES STATUS
            </Button>

            <FeesModal open={feesModalOpen} onClose={handleFeesModalClose} />
          </div>

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
              Filter Members By
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
              <MenuItem value="">All</MenuItem>
              <MenuItem value="option1">Active Members</MenuItem>
              <MenuItem value="option2">Inactive Members</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <h2>Members List</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '1020px',
            justifyContent: 'space-between',
          }}
        >
          <h4 style={{ flex: 1, marginLeft: '30px' }}>NAME</h4>
          <h4 style={{ position: 'absolute', top: '240px', right: '750px' }}>
            STATUS
          </h4>
          <h4 style={{ position: 'absolute', top: '240px', right: '130px' }}>
            SELECT AN ACTION
          </h4>
        </div>
        <div style={classes.userListContainer}>
          <style dangerouslySetInnerHTML={{ __html: scrollbarStyle }} />
          {filteredMembers.map((member) => (
            <div key={member._id} style={classes.userRow}>
              <div>{member.name}</div>
              <div style={{ color: member.isActive ? 'green' : 'red' }}>
                {member.isActive ? 'Active' : 'Inactive'}
              </div>
              <div style={classes.userButtons}>
                <button
                  style={classes.viewButton}
                  onClick={() => handleViewModalOpen(member)}
                >
                  View
                </button>
                <UserViewModal
                  open={viewModalOpen}
                  onClose={handleViewModalClose}
                  member={selectedMember}
                />
                {/* <button
          style={classes.editButton}
          onClick={() => handleEditButtonClick(member._id)}
        >
          Edit
        </button> */}
                <UserEditModal
                  open={editModalOpen}
                  onClose={handleEditModalClose}
                  member={member}
                />
                <button
                  style={classes.removeButton}
                  onClick={() => deleteMember(member._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
