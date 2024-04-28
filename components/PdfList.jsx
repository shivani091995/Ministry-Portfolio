import React, { useState, useEffect } from 'react';
import './PdfList.css';

const PdfList = () => {
  const [pdfList, setPdfList] = useState([]);
  const [newPdf, setNewPdf] = useState({ title: '', pdfPath: '' });
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    // Fetch PDF data from your Spring Boot backend
    fetch('http://localhost:8080/api/pdf-info')
      .then(response => response.json())
      .then(data => setPdfList(data))
      .catch(error => console.error('Error fetching PDF data:', error));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/pdf-info/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // If deletion is successful, update the PDF list
        const updatedPdfList = pdfList.filter(pdf => pdf.id !== id);
        setPdfList(updatedPdfList);
      } else {
        console.error('Failed to delete PDF');
      }
    } catch (error) {
      console.error('Error deleting PDF:', error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/pdf-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPdf),
      });

      if (response.ok) {
        // If addition is successful, update the PDF list
        const addedPdf = await response.json();
        setPdfList([...pdfList, addedPdf]);
        setNewPdf({ title: '', pdfPath: '' });
        setIsAdding(false);
      } else {
        console.error('Failed to add PDF');
      }
    } catch (error) {
      console.error('Error adding PDF:', error);
    }
  };

  return (
    <div className="pdf-list-container">
      <h1>Official Announcements</h1>
      {isAdding && (
        <div>
          <input
            type="text"
            placeholder="Title"
            value={newPdf.title}
            onChange={(e) => setNewPdf({ ...newPdf, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="PDF Path"
            value={newPdf.pdfPath}
            onChange={(e) => setNewPdf({ ...newPdf, pdfPath: e.target.value })}
          />
          <button onClick={handleAdd}>Add</button>
        </div>
      )}
      <table className="pdf-table">
        {/* Table Header */}
        <thead>
          <tr>
            <th>Title</th>
            <th>PDF Path</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {pdfList.map(pdf => (
            <tr key={pdf.id}>
              <td>{pdf.title}</td>
              <td>
                <a href={pdf.pdfPath} target="_blank" rel="noopener noreferrer">
                  View PDF
                </a>
              </td>
              <td>
                <button onClick={() => handleDelete(pdf.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add Button */}
      {!isAdding && <button onClick={() => setIsAdding(true)}>Add</button>}
    </div>
  );
};

export default PdfList;
