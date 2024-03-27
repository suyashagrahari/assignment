import React from "react";
import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import first from "../../public/image/Mumbai.png";
import second from "../../public/image/Banglore.png";
import third from "../../public/image/Delhi.png";
import forth from "../../public/image/Pune.png";
const Grid = () => {
  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 p-4">
        <div className="col grid-item">
          <Image
            src={first}
            alt="Image 1"
            layout="responsive"
            objectFit="cover"
            className="img-fluid rounded"
          />
        </div>
        <div className="col grid-item">
          <Image
            src={second}
            alt="Image 2"
            layout="responsive"
            objectFit="cover"
            className="img-fluid rounded"
          />
        </div>
        <div className="col grid-item">
          <Image
            src={third}
            alt="Image 3"
            layout="responsive"
            objectFit="cover"
            className="img-fluid rounded"
          />
        </div>
        <div className="col grid-item">
          <Image
            src={forth}
            alt="Image 4"
            layout="responsive"
            objectFit="cover"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
