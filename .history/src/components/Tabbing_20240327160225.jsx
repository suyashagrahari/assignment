"use client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Img from "../../public/image/Img-1.png";
import Image from "next/image";
import { useState } from "react";
function Tabbing() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };
  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="Mumbai">
          Heloo
        </Tab>
        <Tab eventKey="profile" title="Pune">
          Heloo
        </Tab>
        <Tab eventKey="longer-tab" title="Delhi">
          Hello
        </Tab>
        <Tab eventKey="contact" title="Banglore">
          Tab content for Contact
        </Tab>
      </Tabs>
    </>
  );
}

export default Tabbing;
