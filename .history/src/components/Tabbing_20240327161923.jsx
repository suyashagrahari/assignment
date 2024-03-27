"use client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Img from "../../public/image/Img-1.png";
import Image from "next/image";
import MyCarousel from "./Carousal";
function Tabbing() {
  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="Mumbai">
          <MyCarousel />
        </Tab>
        <Tab eventKey="profile" title="Pune">
          <MyCarousel />
        </Tab>
        <Tab eventKey="longer-tab" title="Delhi">
          <MyCarousel />
        </Tab>
        <Tab eventKey="contact" title="Banglore">
          <MyCarousel />
        </Tab>
      </Tabs>
    </>
  );
}

export default Tabbing;
