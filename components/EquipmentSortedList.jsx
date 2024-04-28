import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { getAllEquipments, updateEquipmentStatus } from '../Service/EquipmentService';
import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavigationBar from './NavigationBar';
import { formatDate } from '../Service/FormatDate';
import './EquipmentSortedList.css';

export function EquipmentSortedList() {
  const [equipment, setEquipments] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState('');

  async function populateEquipmentState() {
    try {
      const result = await getAllEquipments();
      setEquipments(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    populateEquipmentState();
  }, []);

  const handleUpdateEquipmentStatus = async () => {
    try {
      const result = await updateEquipmentStatus();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSort = (selectedSortBy) => {
    if (selectedSortBy === sortBy) {
      // If the same column is clicked, toggle the order
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      // If a new column is clicked, set the new sorting column and order
      setSortBy(selectedSortBy);
      setSortOrder('asc');
    }
  };

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedStatus(selectedValue);
  };

  const getStatusColorClassName = (status) => {
    switch (status) {
      case 'ACTIVE':
        return 'status-active';
      case 'EXPIRED':
        return 'status-expired';
      case 'MAINTENANCE_REQUIRED':
        return 'status-maintenance-required';
      default:
        return '';
    }
  };

  const handleActiveEquipment = () => {
    // You can implement this functionality as needed
  };

  return (
    <>
      <NavigationBar />
      <Container>
        {/* Button to add equipment */}
        <Link to="/insertEquipment">
          <button className="add-equipment-button">Add Equipment</button>
        </Link>
        <div className="sorting-dropdown">
          <label>Sort By</label>
          <select onChange={(e) => handleSort(e.target.value)}>
            <option value="name">Name</option>
            <option value="issueDate">Issue Date</option>
            <option value="expiryDate">Expiry Date</option>
            <option value="maintainedOnDate">Maintenance Date</option>
          </select>
        </div>
        <div className="status-dropdown">
          <label>Status</label>
          <select
            value={selectedStatus}
            onChange={handleChange}
          >
            <option value="">Select status</option>
            <option value="">All</option>
            <option value="ACTIVE">Active</option>
            <option value="EXPIRED">Expired</option>
            <option value="MAINTENANCE_REQUIRED">Maintenance Required</option>
          </select>
        </div>
        <div className="equipment-table-container">
          <table className="equipment-table">
            <thead>
              <tr>
                <th className="table-header">Id</th>
                <th className="table-header">Name</th>
                <th className="table-header">Type</th>
                <th className="table-header">Issue date</th>
                <th className="table-header">Expiry date</th>
                <th className="table-header">Status</th>
                <th className="table-header">Actions</th>
              </tr>
            </thead>
            <tbody>
              {equipment
                .filter((e) => {
                  if (selectedStatus === "") {
                    return true;
                  } else {
                    return e.equipmentStatus === selectedStatus;
                  }
                })
                .sort((a, b) => {
                  if (sortBy === 'name') {
                    return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
                  } else if (sortBy === 'issueDate') {
                    return sortOrder === 'asc' ? new Date(a.issueDate) - new Date(b.issueDate) : new Date(b.issueDate) - new Date(a.issueDate);
                  } else if (sortBy === 'expiryDate') {
                    return sortOrder === 'asc' ? new Date(a.expiryDate) - new Date(b.expiryDate) : new Date(b.expiryDate) - new Date(a.expiryDate);
                  } else if (sortBy === 'maintainedOnDate') {
                    return sortOrder === 'asc' ? new Date(a.maintainedOnDate) - new Date(b.maintainedOnDate) : new Date(b.maintainedOnDate) - new Date(a.maintainedOnDate);
                  } else {
                    return 0;
                  }
                })
                .map((e) => (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.type}</td>
                    <td>{formatDate(e.issueDate)}</td>
                    <td>{formatDate(e.expiryDate)}</td>
                    <td className={getStatusColorClassName(e.equipmentStatus)}>{e.equipmentStatus}</td>
                    <td>
                      <button
                        className="view"
                        onClick={() => {
                          console.log(e);
                          navigate('/weaponDetails', { state: { equipment: e } });
                        }}
                      >
                        view
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div>
          <button className="b2" onClick={handleUpdateEquipmentStatus}>
            Check for Maintenance
          </button>
          <button className="btn1" onClick={handleActiveEquipment}>
            Show all Requiring Maintenance
          </button>
        </div>
      </Container>
    </>
  );
}
