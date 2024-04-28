import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { addEquipment, uploadEquipmentAndImage, uploadImage } from '../Service/EquipmentService';
import NavigationBar from './NavigationBar';
import './EditEquipment.css';
import { addManufacturer } from '../Service/Manufacturer';

export function InsertManufacturer() {
    const params = useParams();
    const [formData, setFormData] = useState({
        mName: "",
        mAddress: "",
        mContact: "",
    });
    const [fileData, setFileData] = useState(null); // Store the file data
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFileData(e.target.files[0]); // Update file data
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await addManufacturer(formData);
           // const imageUpload = await uploadImage(fileData);
         //   console.log(result);
            setIsSubmitted(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <NavigationBar />
            <Container className="d-flex justify-content-center align-items-center">
                <div className="container">
                    <Form onSubmit={handleSubmit}>
                        <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Manufacturer name</Form.Label>
                                <Form.Control
                                    type="text"   
                                    placeholder="Enter Manufacturer name"
                                    name="mName"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Manufacturer address</Form.Label>
                                <Form.Control
                                    type="text"                                   
                                    placeholder="Enter manufacturer address"
                                    name="mAddress"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>   
                        </Row>
                        
            
                    {/* <Row>    
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Status</Form.Label>
                                <Form.Select         
                                        name="equipmentStatus"
                                        onChange={handleChange}
                                      >
                                        <option value="">Select status</option>
                                        <option value="ACTIVE">Active</option>
                                        <option value="EXPIRED">Expired</option>
                                        <option value="MAINTENANCE_REQUIRED">maintenance required</option>
                                        <option value="UNDER_MAINTENANCE">under maintenance</option>
                                        </Form.Select>
                            </Form.Group>
                        </Col>                       
                    </Row> */}

                    {/* <Row>
                         <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Manufacturer id</Form.Label>
                                <Form.Control
                                    type="text"
                                   
                                    placeholder="Enter manufacture id"                                  
                                    //readOnly
                                    name="manufacturerId"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col> 
                       </Row>  */}


                        {/* <Row className="justify-content-md-center">
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="file" name="imagePath" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row> */}

                        <Row>
                            <Col lg={3}>
                                <Button variant="primary" type="submit">
                                    Add
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <Row className="mt-3">
                        <Col lg={4}>
                            {isSubmitted ? <Alert variant="success">manufacturer Details Inserted</Alert> : null }
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}
