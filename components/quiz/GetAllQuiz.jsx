import { useEffect, useState } from "react";
import NavigationBar from "../NavigationBar";
import { Button, Container, Table , Modal} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAllQuizes } from "../../Service/EduQuiz";

export  function GetAllQuiz() {
    const [quiz , setQuiz] = useState([]);
    const [selectedQuiz, setSelectdQuiz] = useState();
    const [showDialog, setShowDialog] = useState(false);
    const navigate = useNavigate();

    async function populateUserState(){
        try {
            const result  = await getAllQuizes();
            console.log(result);
            setQuiz(result.data);
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

    //   const handleUserDelete = async () => {
    //     try{
    //        const result = await deleteUser(selectedUser);
    //        console.log(result);
    //        closeModalDialog();
    //        if (result.data && result.status === 200) {
    //         alert(result.data || "User deleted successfully!");
    //         populateUserState();
    //       } else {
    //         alert(result.data.message || "Failed to delete user.");
    //       }
           
    //     }catch(error){
    //         console.log(error);
    //     }
    //   };

    return(
        <>
        
        <Container>
          
        <Table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>title</th>
                        <th>Action</th>
                        {/* <th>Email</th>
                        <th>Phone</th>
                         <th>Role</th> 
                        <th>Status</th>
                        <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {quiz.map((q)=>(
                        <tr key={q.id}>
                            <td>{q.id}</td>
                            <td>{q.title}</td>
                            {/* <td>{q.email}</td>
                            <td>{q.phone}</td>
                            <td>{q.role}</td>
                            <td>{q.status}</td> */}
                            <td>
                                <Button variant="danger" onClick={()=>{openModalDialog();
                                    setSelectdQuiz(q.id);}}>Delete</Button>
                            </td>
                            {/* <td><Button varient="primary" onClick={()=>{navigate(`/updateUser/${u.id}`);}}> update</Button></td> */}
                        </tr>
                        ))}
                </tbody>
        </Table>
                                  
        </Container>
        {/* <Modal show={showDialog} onHide={closeModalDialog}>
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
      </Modal> */}
        </>
    )
}
   