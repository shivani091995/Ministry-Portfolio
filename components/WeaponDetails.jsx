import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { deleteEquipment, downloadImage } from '../Service/EquipmentService';
import NavigationBar from './NavigationBar';
import { formatDate } from '../Service/FormatDate';
import axios from 'axios';
import './WeaponDetails.css';

export function WeaponDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const weapon = location.state?.equipment || {};
  // const weapon = localStorage.getItem("equipment");
  console.log(weapon);
  //const storedSessionEquipment = JSON.parse(sessionStorage.getItem('sessionequipment'));
  //console.log(storedSessionEquipment);
  //   const storedLocalEquipment = JSON.parse(localStorage.getItem('localequipment'));
  // console.log(storedLocalEquipment);

  const [showDialog, setShowDialog] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState('');

  const openModalDialog = () => {
    setShowDialog(true);
  };
  const closeModalDialog = () => {
    setShowDialog(false);
  };

  const handleEquipmentDelete = async () => {
    try {
      await deleteEquipment(selectedEquipment);
      //populateEquipmentState();
      closeModalDialog();
    } catch (error) {
      console.log(error);
    }
  };

  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const result = await axios.get(`https://localhost:8080/equipment/images/7`);

        // Assuming the response.data contains the image URL
        setImageURL(result.data);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [weapon.id]);

  return (
    <>
      <NavigationBar />
      <div className="weapon-details-container">
        <h2>Weapon Details</h2>

<div className="detail">
          <img
            src={`https://localhost:8080/equipment/images/${weapon.id}`}
            alt={weapon.name}
            style={{ maxWidth: '50%', maxHeight: '250px' }}
          />
        </div>
        <div className="details-grid">
          <div className="detail-item">
            <span className="detail-label">ID:</span>
            
            <span>{weapon.id}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Name:</span>
            <span>{weapon.name}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">equipment Type:</span>
            <span>{weapon.type}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">Issue Date:</span>
            <span>{formatDate(weapon.issueDate)}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Expiry Date:</span>
            <span>{formatDate(weapon.expiryDate)}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Equipment Status</span>
            <span>{weapon.equipmentStatus}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Equipment description</span>
            <p>{weapon.description}</p>
          </div>
        </div>
       
      </div>
    <br />
      <Button className='first' onClick={() => {
        sessionStorage.setItem('sessionequipment', JSON.stringify(weapon));
        navigate(`/EditEquipment`);
      }}> Edit </Button>

      <Button
        className='second'
        onClick={() => {
          openModalDialog();
          setSelectedEquipment(weapon.id);
        }}
      >
        Delete
      </Button>

      <Modal show={showDialog} onHide={closeModalDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete Equipment named {selectedEquipment}?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleEquipmentDelete}>
            Yes
          </Button>
          <Button variant="danger" onClick={closeModalDialog}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


