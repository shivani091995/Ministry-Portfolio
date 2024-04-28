import { useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../Service/Service";
import NavigationBar from "./NavigationBar";
import { Button, Container, Table , Modal} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './GetAllUsers.css';

export function GetAllUsers(){
    const [user , setUser] = useState([]);
    const [selectedUser, setSelectdUser] = useState();
    const [showDialog, setShowDialog] = useState(false);
    const navigate = useNavigate();

    async function populateUserState(){
        try {
            const result  = await getAllUsers();
            console.log(result);
            setUser(result.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        populateUserState();
    }, []);
    
    const openModalDialog = () => {
        setShowDialog(true);
    };
    const closeModalDialog = () => {
        setShowDialog(false);
    };

    const handleUserDelete = async () => {
        try{
            const result = await deleteUser(selectedUser);
            console.log(result);
            closeModalDialog();
            if (result.data && result.status === 200) {
                alert(result.data || "User deleted successfully!");
                populateUserState();
            } else {
                alert(result.data.message || "Failed to delete user.");
            }   
        } catch(error) {
            console.log(error);
        }
    };

    return(
        <>
        <NavigationBar></NavigationBar>
        <div className="page-container"> {/* Container div for page content */}
            <div className="table-container"> {/* Container div for table */}
                <Container>
                    <Table className="user-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Role</th> 
                                <th>Status</th>
                                <th>Actions</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((u)=>(
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.phone}</td>
                                    <td>{u.role}</td>
                                    <td>{u.userStatus}</td>
                                    <td>
                                        <button className="delete" onClick={() => { openModalDialog(); setSelectdUser(u.id); }}>Delete</button>
                                    </td>
                                    <td>
                                        <button className="update" onClick={() => { navigate(`/updateUser/${u.id}`); }}>Update</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </div>
        </div>
        <Modal show={showDialog} onHide={closeModalDialog}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you really want to delete User named {selectedUser}?</Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleUserDelete}>
                    Yes
                </Button>
                <Button variant="danger" onClick={closeModalDialog}>
                    No
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
