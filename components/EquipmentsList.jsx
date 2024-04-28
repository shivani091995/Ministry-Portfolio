import { useState, useEffect } from 'react';
import { Button, Container,  Table } from 'react-bootstrap';
import './EquipmentList.css';
import {  getAllEqpsPaginated, getAllEquipments, getEquimentsByExpirydate, updateEquipmentStatus } from '../Service/EquipmentService';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { formatDate} from '../Service/FormatDate'


export function EquipmentList() {
    const [equipment, setEquipments] = useState([]);
    const [selectMethod , setSelectMethod] = useState(true);
    const navigate = useNavigate(); 
    const [showOnlyActive, setShowOnlyActive] = useState(false);
    var pageNumber =0 ;
    const pageSize=3 ;

    async function populateEquipmentState() {
        try {
            // const result = await getAllEqpsPaginated(pageNumber ,pageSize);
            const result = await getAllEquipments();           
            console.log('EquipmentList ', result);
            setEquipments(result);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        populateEquipmentState();
    }, []);

    const handleUpdateEquipmentStatus = async () =>{
        try {
           const result = await updateEquipmentStatus();
           console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

     const handlePageNumber = ()=>{
        pageNumber += pageSize;   
        console.log("setPageNumber" , pageNumber); 
       // populateEquipmentState;
     }

    const handleActiveEquipment = () => {
        setShowOnlyActive(true);   
    };
    return (
        <>
        <NavigationBar></NavigationBar>
            <Container>
                <Table className="equipment-table" responsive="md">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Issue date</th>
                            <th>Expiry date</th>
                            <th>staus</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipment
                         .filter((e) => !showOnlyActive || e.equipmentStatus !== 'EXPIRED')
                            .map((e) => (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.type}</td>
                                    <td>{formatDate(e.issueDate)}</td>
                                    <td>{formatDate(e.expiryDate)}</td>
                                    <td>{e.equipmentStatus}</td>
                                    <td>          
                                        <Button variant="primary" className="btn-sm" onClick={() =>{
                                            console.log(e);
                                            // sessionStorage.setItem('sessionequipment' , JSON.stringify(e))
                                            //   localStorage.setItem("localequipment", JSON.stringify(e));
                                         navigate(`/weaponDetails` , {state :{equipment : e}});
                                            }}
                                        >
                                            view
                                        </Button>
                                        
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
                {/* <Button onClick={}>previous</Button> */}
                {/* <Button onClick={handlePageNumber}>next</Button> */}
   To update the equipmentStatus <Button className="btn-sm" onClick={handleUpdateEquipmentStatus}>update</Button> <br />
    Show active only <Button className="btn-sm" onClick={handleActiveEquipment}>Active</Button>

            </Container>
        </>
    );
}
export default EquipmentList;
