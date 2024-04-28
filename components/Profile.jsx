import { useEffect, useState } from "react";
import { getUser, uploadProfilePic } from "../Service/Service";
import './Profile.css';
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

export function Profile() {
    const navigate = useNavigate(); // Access the navigate function
    const [profileData, setProfileData] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    
    useEffect(() => {
        async function populateProfile() {
            try {
                const userID = localStorage.getItem("userID");
                console.log(userID);
                if (userID !== null && userID !== undefined) {
                    const result = await getUser(userID);
                    console.log(result);
                    setProfileData(result);
                } else {
                    throw new Error('User ID not found');
                }
            } catch (error) {
                console.log(error);
                navigate('/loggedin');
            }
        }
        populateProfile();
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
    
        if (!selectedFile) {
          alert("Please select a file");
          return;
        }
    
        const result = await uploadProfilePic(profileData.id, selectedFile);
        console.log(result);
    
        if (result.status === 201) {
          alert("Image Uploaded Successfully");
        } else {
          alert("Unable to update Image");
        }
      };
    return (
        <>
            <Navbar />

            {profileData && (
                <>
                <div className="pcontainer">
                    <img
                        src={`https://localhost:8080/user/images/${profileData.id}`}
                        className="profile-image"
                        alt="Profile"
                    />
                    <div className="profile-info">
                        <p className="profile-info-item">ID: {profileData.id}</p>
                        <p className="profile-info-item">Name: {profileData.name}</p>
                        <p className="profile-info-item">Email: {profileData.email}</p>
                        <p className="profile-info-item">Phone: {profileData.phone}</p>
                        <p className="profile-info-item">Role: {profileData.role}</p>
                        <p className="profile-info-item">Status: {profileData.userStatus}</p>
                    </div>
                </div>
                      <div>
                      <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label htmlFor="formFile">Default file input example</Form.Label>
                         <Form.Control type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
                        </Form.Group>
                        <button type="submit" className="mb-3">Submit</button>
                      </Form>
                    </div> 
            </>
            )}
        </>
    );
}
