// DefenceContent.js

import { Carousel } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import img from '../assets/mann.jpg'
import img2 from '../assets/edunew.jpeg'
import img3 from '../assets/mann2.png'
import img4 from '../assets/Army.jpg'
import img5 from '../assets/Airforce.jpg'
import img6 from '../assets/Navy.jpeg'
import img7 from '../assets/rajnath.jpg'
import img8 from '../assets/Ajay.jpg'
import img9 from '../assets/cds.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./defence.css";

export function DefenceContent() {
  return (
    <Container fluid className="bg-image">
      <div>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <div>
          <br />
          <div className="card">
            <div className="card-body text-center">
              <h3>IMPORTANT ORGANIZATION</h3>
            </div>
          </div>

          <div className="card-text-container">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title>INDIAN ARMY</Card.Title>
                <Card.Text>
                  The motto of the Indian army is 'Seva Paramo Dharma' and it means 'Service Before Self'
                </Card.Text>
                <Button variant="primary" href="https://indianarmy.nic.in/">Know More</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={img5} />
              <Card.Body>
                <Card.Title>INDIAN AIR FORCE</Card.Title>
                <Card.Text>
                  The Motto of Indian Air Force (Touch the sky with Glory) has been taken from the eleventh chapter of the Gita
                </Card.Text>
                <Button variant="primary" href="https://indianairforce.nic.in/">Know More</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={img6} />
              <Card.Body>
                <Card.Title>INDIAN NAVY</Card.Title>
                <Card.Text>
                  The motto of the Indian Navy “Sam no Varunah” (Be auspicious unto us Oh Varuna)
                </Card.Text>
                <Button variant="primary" href="https://indiannavy.nic.in/">Know More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="figure-container">
          <div className="figure">
            <div style={{ textAlign: 'center' }}>
              <img
                width={300}
                height={350}
                alt="300x350"
                src={img7}
                style={{ display: 'block', margin: 'auto', border: '2px solid black' }}
              />
              <div style={{ marginTop: '10px', color: 'red' }}><h4>Defence Minister of India</h4></div>
            </div>
          </div>
          <div className="figure">
            <div style={{ textAlign: 'center' }}>
              <img
                width={300}
                height={350}
                alt="300x350"
                src={img8}
                style={{ display: 'block', margin: 'auto', border: '2px solid black' }}
              />
              <div style={{ marginTop: '10px', color: 'red' }}><h4>Minister of State in the Ministry of Defence</h4></div>
            </div>
          </div>
          <div className="figure">
            <div style={{ textAlign: 'center' }}>
              <img
                width={200}
                height={250}
                alt="300x350"
                src={img9}
                style={{ display: 'block', margin: 'auto', border: '2px solid black' }}
              />
              <div style={{ marginTop: '10px', color: 'red' }}><h4>Chief of Defence Forces</h4></div>
            </div>
          </div>
        </div>

        <h1 className="half-underline">About the Ministry</h1>

        <p><h6 className="parah">The Government of India is responsible for ensuring the defence of India and every part thereof. The Supreme Command of the Armed Forces vests in the President. The responsibility for national defence rests with the Cabinet.</h6></p>
        <p><h6 className="parah">This is discharged through the Ministry of Defence, which provides the policy framework and wherewithal to the Armed Forces to discharge their responsibilities in the context of the defence of the country. The Raksha Mantri (Defence Minister) is the head of the Ministry of Defence.</h6></p>
        <p><h6 className="parah">The principal task of the Defence Ministry is to obtain policy directions of the Government on all defence and security related matters and communicate them for implementation to the Services Headquarters, Inter-Services Organisations, Production Establishments and Research and Development Organisations. It is also required to ensure effective implementation of the Government's policy directions and the execution of approved programmes within the allocated resources. Ministry of Defence comprises of five Departments viz. Department of Defence (DOD), Department of Defence Production (DDP), Department of Defence Research & Development (DDR&D), and Department of Ex-Servicemen Welfare and also Finance Division</h6></p>
      </div>

      
    </Container>
  );
}
