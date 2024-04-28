import React, { useState } from "react";
import Masonry from "react-responsive-masonry";
import "./Gallery.css";

const images = [
  "http://mod.gov.in/sites/default/files/2023-12/2LoC_RM_271223_Img7.jpg",
  "https://picsum.photos/3000/2000",
  "https://indianairforce.nic.in/wp-content/uploads/2023/02/TABLEAU-EDITED.jpg",
  "https://indianairforce.nic.in/wp-content/uploads/2023/02/BAND-EDITED-e1675403290538.jpg",
  "https://indianairforce.nic.in/wp-content/uploads/2023/02/FLY-PAST2-EDITED.jpg",
  "https://indianairforce.nic.in/wp-content/uploads/2023/02/CONTINGENT-MARCH-EDITED.jpg",
  "http://www.mod.gov.in/sites/default/files/2023-12/RM_INS_261223_Img10.jpg",
  "http://www.mod.gov.in/sites/default/files/2023-12/RM_INS_261223_Img5.jpg",
  "http://www.mod.gov.in/sites/default/files/2023-12/RM_INS_261223_Img1.jpg",
  "http://www.mod.gov.in/sites/default/files/2023-12/RM_INS_261223_Img3.jpg",
  "https://www.mod.gov.in/sites/default/files/styles/150_150/public/2023-12/RM_INS_261223_Img2.jpg?itok=vVtSCH_W",
  "http://mod.gov.in/sites/default/files/2023-12/2LoC_RM_271223_Img5.jpg",
  "http://mod.gov.in/sites/default/files/2023-12/2LoC_RM_271223_Img2.jpg",
  "http://mod.gov.in/sites/default/files/2023-12/2LoC_RM_271223_Img4.jpg",
  "http://mod.gov.in/sites/default/files/2023-12/2LoC_RM_271223_Img3.jpg",
  "http://mod.gov.in/sites/default/files/2023-12/2LoC_RM_271223_Img1.jpg",
  "http://mod.gov.in/sites/default/files/2023-12/2LoC_RM_271223_Img6.jpg",
];

const Gallery = () => {
  const [data, setData] = useState({ img: "", i: 0 });

  const view = (img, i) => {
    setData({ img, i });
  };

  return (
    <>
      {data.img && (
        <div
          className="modal-container"
          onClick={() => setData({ img: "", i: 0 })}
        >
          <button className="close-button">X</button>
          <img
            src={data.img}
            className="modal-image"
            alt=""
          />
        </div>
      )}
      <div className="gallery-container">
        <Masonry columnsCount={3} gutter="20px">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              className="gallery-image"
              alt=""
              onClick={() => view(image, i)}
            />
          ))}
        </Masonry>
      </div>
    </>
  );
};

export default Gallery;
