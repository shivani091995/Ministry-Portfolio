import Dropdown from 'react-bootstrap/Dropdown';

export function ParliamentAffairs(){
    return(
       <div><h1>Parliament Affairs</h1>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      Parliament Affairs
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Lok Sabha</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Rajya Sabha</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Parliament Replies</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Parliament Matters</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></div> 
    );
}