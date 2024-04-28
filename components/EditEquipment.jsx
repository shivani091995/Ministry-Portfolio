import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { getEquipmentByName, updateEquipment } from '../Service/EquipmentService';
import { formatDate } from '../Service/FormatDate';
import NavigationBar from './NavigationBar';
import './EditEquipment.css'

export function EditEquipment() {
    const params = useParams();
    const sessionData= JSON.parse(sessionStorage.getItem('sessionequipment'));
    const [formData ,setFormData] = useState(sessionData || {});
console.log(formData);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await updateEquipment(formData);
            console.log(result);
            setIsSubmitted(true);
        } catch (error) {
            console.log(error);
        }
    };

    if (formData == null) {
        return <div>Data not available</div>; 
    }

    const formatDateForInput = (dateString) => {
        const dateObject = new Date(dateString);
        const formattedDate = dateObject.toISOString().split('T')[0];
        return formattedDate;
    };
    

    return (
        <>
            <NavigationBar/>
            <Container className="d-flex justify-content-center align-items-center" >
                <div className="container">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Equipment id</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={formData.id}
                                    placeholder="Enter equipment id"
                                     readOnly
                                    name="id"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Equipment name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={formData.name}
                                    placeholder="Enter equipment name"
                                    name="name"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Issue Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={formatDateForInput(formData.issueDate)}
                                    name="issueDate"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                        <Form.Group className="mb-3">
    <Form.Label>Expiry Date</Form.Label>
    <Form.Control
        type="date"
        value={formatDateForInput(formData.expiryDate)} // format for input
        name="expiryDate"
        onChange={handleChange}
    />
</Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Equipment Type</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={formData.type}
                                    placeholder="Enter equipment Type"
                                    name="type"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Status</Form.Label>
                                <Form.Select
                                        value={formData.equipmentStatus}
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
                    </Row>

                    <Row>
                        <Col lg={8}>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={formData.description}
                                    placeholder="Enter equipment description"
                                    name="description"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                         {/* <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Manufacturer id</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={formData.manufacture ? formData.manufacturer.id : ''}
                                    placeholder="Enter manufacture id"                                  
                                    readOnly
                                    name="id"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>  */}
                         {/* <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Equipment name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={formData.manufacturer.name}
                                    placeholder="Enter equipment type"
                                    name="type"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>  */}
                    </Row>
                    {/* <Row>
                    <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Manufacturer contact</Form.Label>
                        <Form.Control 
                            type="number"
                            value={formData.manufacturer
                                .contact}
                            placeholder="Enter manufacture contact"
                            name="contact"
                            onChange={handleChange}
                            required
                            pattern="[0-9]*" // Allow only numbers
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid contact number.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col> */}
                            {/* <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Manufacturer's status</Form.Label>
                                <Form.Select
                            value={formData.manufacturer.status}
                            name="status"
                            onChange={handleChange}
                        >
                            <option value="">Select status</option>
                            <option value="ACTIVE">Active</option>
                            <option value="INACTIVE">Inactive</option>
                            <option value="DELETED">Maintenance Required</option>
                        </Form.Select>
                            </Form.Group>
                        </Col> */}
                        {/* </Row><Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Equipment Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={formData.manufacturer.address}
                                    placeholder="Enter manufacture address"
                                    name="address"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row> */}

                    <Row>
                        <Col lg={3}>
                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <Row className="mt-3">
                    <Col lg={4}>
                        {isSubmitted ? <Alert variant="success">Equipment Details updated</Alert> : <Alert variant="success">Equipment Details not updated</Alert>}
                    </Col>
                </Row>
                </div>
            </Container>
        </>
    );
}
